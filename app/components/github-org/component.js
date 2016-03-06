import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(orgs) {
      this.get('favorites').add(orgs);
    }
    // alternative
    // {{github-org on-fav-clicked='actionNameFromRouter' org=org}}
    // favoriteWasClicked() {
    //   this.sendAction('on-fav-clicked', org);
    // }
  }
});
