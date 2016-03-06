import Ember from 'ember';

export function isInArray(itemKey, listKey) {
  return Ember.computed(itemKey, `${listKey}.[]`, function () {
    return this.get(listKey).includes(this.get(itemKey));
  });
}

