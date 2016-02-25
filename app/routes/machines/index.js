import Ember from 'ember';
import config from 'robodash-browser/config/environment';

export default Ember.Route.extend({
  model(){

    let adapter = this.store.adapterFor('machine');
    adapter.changeLocalDb("robodash-user", localStorage.getItem('robodash-userdb-uuid'));

    return this.store.findAll('machine');
  },

  afterModel: function (recordArray) {
    // This tells PouchDB to listen for live changes and
    // notify Ember Data when a change comes in.
    new PouchDB(config.emberPouch.localDbPrefix + localStorage.getItem('robodash-userdb-uuid')).changes({
      since: 'now',
      live: true
    }).on('change', function () {
      recordArray.update();
    });
  }
});
