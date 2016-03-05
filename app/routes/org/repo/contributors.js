import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const org = this.modelFor('org'),
      repo = this.modelFor('org.repo');

    return $.get(`https://api.github.com/repos/${org.id}/${repo.id}/contributors`);
  }
});
