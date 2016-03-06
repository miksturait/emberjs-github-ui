import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const org = this.modelFor('org');

    return $.get(`https://api.github.com/orgs/${org.id}/repos`)
      .then(function (repos) {
        return repos.map(function (repo) {
          return {
            id: repo.name,
            oldId: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            forks: repo.forks,
            watchers: repo.watchers,
          };
        });
      });
  }
});
