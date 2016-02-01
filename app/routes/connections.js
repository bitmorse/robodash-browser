import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    save() {
      console.log("saving connection");
      this.modelFor("connections/edit").save().then(()=>{
        this.transitionTo('views');
      });
      return false;
    },

    delete(connection){
      //disassociate connection and delete connection
      connection.deleteRecord();
      connection.save().then(()=>{
        connection.get('machine').save().then(()=>{
          this.transitionTo('views');
        });
      });
    }
  }

});
