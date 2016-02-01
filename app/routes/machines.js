import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    cancel(){
      console.log("cancelled machine crud");
      this.transitionTo('views');
      return true;
    },

    delete(machine){
      machine.destroyRecord().then(() => {
        this.transitionTo('views');
      });
    }
  }

});
