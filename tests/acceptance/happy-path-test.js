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

describe('Acceptance: HappyPath', function () {
  let application;

  beforeEach(function () {
    application = startApp();
  });

  afterEach(function () {
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
