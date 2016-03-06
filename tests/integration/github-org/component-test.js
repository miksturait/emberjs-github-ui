/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'github-org',
  'Integration: GithubOrgComponent',
  {
    integration: true
  },
  function() {
    it('display organisation name and `add to favorites`', function() {
      this.set('emberOrg', {id: 'emberjs', name: 'Ember.js', full_name: 'Ember.js'});
      this.render(hbs`{{github-org org=emberOrg}}`);

      expect(this.$('li').html()).to
        .contain('Ember.js').and
        .contain('add to favorites');
    });

    it('add organisation to favorite list', function() {
      this.set('emberOrg', {id: 'emberjs', name: 'Ember.js', full_name: 'Ember.js'});
      this.render(hbs`{{github-org org=emberOrg}}`);

      $("span:contains('add to favorites')").click();

      expect($("li > span").html()).to.eql('[ FAV ]');
    });
  }
);
