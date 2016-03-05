import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  add(item) {
    const items = this.get('items');
    items.addObject(item);
    console.log(items.map( i => i.id ));
  }
});
