import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    save() {
      console.log("saving view");
      this.modelFor("views/edit").save().then(()=>{
        this.transitionTo('views');
      });
      return false;
    },

    delete(view){
      //disassociate  and delete view
      view.deleteRecord();
      view.save().then(()=>{
        view.get('machine').save().then(()=>{
          this.transitionTo('views');
        });

      });
    }
  }


});
