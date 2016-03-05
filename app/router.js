import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs');
  this.route('org', {path: "org/:org_name"}, function() {
    this.route('repos');
    this.route('repo', { path: "/:repo_name" }, function() {
      this.route('issues');
      this.route('contributors');
    });
    this.route('notfound');
  });

  this.route('error', {path: "*path"});
});

export default Router;
