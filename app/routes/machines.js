import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save(){
      console.log("attemting to save machine");

      return true;
    },

    cancel(){
      console.log("cancelled machine crud");
      this.transitionTo('machines');
      return true;
    }
  }

});
