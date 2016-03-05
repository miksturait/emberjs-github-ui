import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const org = this.modelFor('org'),
      repo_name = params.repo_name;

    return $.get(`https://api.github.com/repos/${org.id}/${repo_name}`)
      .then(function (repo) {
        return {id: repo.name, oldId: repo.id, name: repo.name, full_name: repo.full_name};
      });
  }
});
