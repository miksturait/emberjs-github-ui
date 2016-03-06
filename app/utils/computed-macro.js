import Ember from 'ember';

export function isInArray(item, listOfItems) {
  return Ember.computed(item, listOfItems, function () {
    return this.get(listOfItems).includes(this.get(item));
  });
}

