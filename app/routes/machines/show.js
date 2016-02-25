import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log("show machine");
    console.log(params.machine_id);
    
    let adapter = this.store.adapterFor('machine');
    adapter.changeLocalDb("robodash-machine", params.machine_id);

    return this.store.find('machine', params.machine_id);
  }

});
