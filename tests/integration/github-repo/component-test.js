/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'github-repo',
  'Integration: GithubRepoComponent',
  {
    integration: true
  },
  function() {
    it('display repo name and watchers and forks count', function() {
      this.set('emberRepository', {id: 'ember.js', name: 'Ember.js', full_name: 'Ember.js', watchers: 20, forks: 35});
      this.render(hbs`{{github-repo repo=emberRepository}}`);

      expect(this.$('li').html()).to
        .contain('Ember.js').and
        .contain('Watchers: 20').and
        .contain('Forks: 35');
    });
  }
);
