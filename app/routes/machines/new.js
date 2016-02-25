import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    //create machine db and switch to it here
    return this.store.createRecord('machine'); //creates, but doesn't save yet
  }

});
