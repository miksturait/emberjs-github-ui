import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'facebook'},
      {id: 'netflix'},
      {id: 'yahoo'},
      {id: 'ember.js'}
    ];
  }
});
