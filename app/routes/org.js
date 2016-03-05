import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const orgName = params.org_name;

    return $.get(`https://api.github.com/orgs/${orgName}`)
      .then(function (org) {
        return {id: org.login, oldId: org.id, name: org.name, avatarUrl: org.avatar_url};
      });
  },

  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo('org.notfound');
      } else {
        return true;
      }
    }
  }
});
