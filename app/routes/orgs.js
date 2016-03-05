import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),

  model() {
    return [
      {id: 'facebook'},
      {id: 'netflix'},
      {id: 'yahoo'},
      {id: 'emberjs'}
    ];
  },

  actions:{
    addToFavorites(orgs) {
      this.get('favorites').add(orgs);
    }
  }
});
