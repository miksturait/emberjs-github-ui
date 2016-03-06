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
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#github-org}}
      //     template content
      //   {{/github-org}}
      // `);

      this.render(hbs`{{github-org}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
