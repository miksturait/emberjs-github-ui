/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import Pretender from 'pretender';

function createGithubServer() {
  function json(obj, status=200) {
    return [status, {'Content-Type': 'text/json'}, JSON.stringify(obj)];
  }

  return new Pretender(function() {
    this.get('https://api.github.com/orgs/:id',
      () => json({
        id: 99,
        login: "emberjs",
        name: "Ember.js",
        avatar_url: 'https://avatars.githubusercontent.com/u/1253363?v=3'
      }));

    this.get('https://api.github.com/orgs/:id/repos',
      () => json([{
        id: 128,
        name: "ember-inspector",
        watchers: 25,
        forks: 47
      }]));

    this.get('https://api.github.com/repos/:org_id/:repo_id',
      () => json({
        id: 128,
        name: "ember-inspector"
      }));

    this.get('https://api.github.com/repos/:org_id/:repo_id/issues',
      () => json([
        {id: 128, title: "one two three" },
        {id: 129, title: "four five six" }
      ]));

    this.get('https://api.github.com/repos/:org_id/:repo_id/contributors',
      () => json([
        {id: 138, login: "horse" },
        {id: 139, login: "ant" }
      ]));
  });
}

let server;

describe('Acceptance: HappyPath', function () {
  let application;

  beforeEach(function () {
    application = startApp();
    server = createGithubServer();
  });

  afterEach(function () {
    server.shutdown();
    destroyApp(application);
  });

  it('can visit organisations, repos for organisation, issues and contributors for repository', function () {
    visit('/');

    andThen(function () {
      expect(currentPath()).to.equal('orgs');
    });

    click('a:contains("Ember.js")');

    andThen(function () {
      expect(currentPath()).to.equal('org.repos');
    });

    click('a:contains("ember-inspector")');

    andThen(function () {
      expect(currentPath()).to.equal('org.repo.issues');
      expect($('ul.repo-nav').html()).to
        .contains('ISSUES').and
        .contains('CONTRIBUTORS');
    });

    click('ul.repo-nav > li:contains("CONTRIBUTORS")');

    andThen(function () {
      expect(currentPath()).to.equal('org.repo.contributors');
    });
  });
});
