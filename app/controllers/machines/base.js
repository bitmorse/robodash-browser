import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save(){
      console.log("saving");
      this.get('model').save().then((machine) => {
        console.log("saved")
        this.transitionToRoute('machines');
      });
      return true;

    }
  }

});
