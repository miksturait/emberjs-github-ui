import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(orgs) {
      this.get('favorites').add(orgs);
    }
  }
});
