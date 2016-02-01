import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('view', {
      machine: this.modelFor('machines/show')
    }); //creates, but doesn't save yet
  },

  actions: {
    save(){
      console.log("saving new view")
      var model = this.modelFor('views/new');

      model.save().then(()=>{
        console.log("saved new view");
        this.modelFor('machines/show').save().then(()=>{
          console.log("saved parent machine");

          this.transitionTo('views');
        });
      });


      return false;
    }
  }
});
