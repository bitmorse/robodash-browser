import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    save() {
      console.log("saving devices");
      this.modelFor("devices/edit").save().then(()=>{
        this.transitionTo('views');
      });
      return false;
    },

    delete(device){
      //disassociate device and delete device
      device.deleteRecord();
      device.save().then(()=>{
        device.get('machine').save().then(()=>{
          this.transitionTo('views');
        });
      });
    }
  }

});
