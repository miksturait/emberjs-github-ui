import Ember from 'ember';
import { isInArray } from 'github-ui/utils/computed-macro';

export default Ember.Component.extend({
  tagName: 'li',

  favorites: Ember.inject.service(),
  isFavorited: isInArray('org', 'favorites.items.[]'),

  actions: {
    addToFavorites() {
      this.get('favorites').add(this.get('org'));
    }
    // alternative
    // {{github-org on-fav-clicked='actionNameFromRouter' org=org}}
    // favoriteWasClicked() {
    //   this.sendAction('on-fav-clicked', org);
    // }
  }
});
