import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      {id: 'facebook', name: 'Facebook'},
      {id: 'netflix', name: 'Netflix'},
      {id: 'yahoo', name: 'Yahoo'},
      {id: 'emberjs', name: 'Ember.js'}
    ];
  }
});
