import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('connection', {
      type: "cylon",
      machine: this.modelFor('machines/show')
    }); //creates, but doesn't save yet
  },

  actions: {
    save(){
      console.log("saving new connection")
      var model = this.modelFor('connections/new');

      model.save().then(()=>{
        console.log("saved new connection");
        this.modelFor('machines/show').save().then(()=>{
          console.log("saved parent machine");

          this.transitionTo('machines.show');
        });
      });


      return false;
    }
  }
});
