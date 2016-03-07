import Ember from 'ember';

export function niceNumber(number) {
  if (number < 1000) {
    return number.toString();
  } else {
    return `${Math.round((number / 100.0)) / 10.0}K`;
  }
}

export default Ember.Helper.helper(niceNumber);
