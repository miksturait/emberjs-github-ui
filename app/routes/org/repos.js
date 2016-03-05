import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "ember.js"},
      {id: "ember-cli"},
      {id: "yahoo"},
      {id: "facebook"}
    ];
  },
});
