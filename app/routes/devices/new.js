import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('device', {
      type: "cylon",
      machine: this.modelFor('machines/show')
    }); //creates, but doesn't save yet
  },

  actions: {
    save(){
      console.log("saving new device");
      var model = this.modelFor('devices/new');

      model.save().then(() => {
        console.log("saved new device");
        this.modelFor('machines/show').save().then(()=>{
          console.log("saved parent machine");

          this.transitionTo('views');
        });
      });


      return false;
    }
  }
});
