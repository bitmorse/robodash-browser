import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save(){
      var self = this;
      console.log("saving");
      self.get('model').save().then((machine) => {
        console.log("saved")

        console.log(machine);
        //save also in machine db

        //call API and send machine data. this will either create a machine DB or
        // update the metadata in an existing machine DB.

        let adapter = self.store.adapterFor('machine');
        adapter.changeLocalDb("robodash-machine", machine.id);

        self.get('model').save().then((machine) => {
            console.log(machine);
            console.log("saved again");
            this.transitionToRoute('machines');
        });

      });
      return true;

    }
  }

});
