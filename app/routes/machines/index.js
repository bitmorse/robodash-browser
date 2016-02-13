import Ember from 'ember';
import config from 'robodash-browser/config/environment';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('machine');
  },

  afterModel: function (recordArray) {
    // This tells PouchDB to listen for live changes and
    // notify Ember Data when a change comes in.
    new PouchDB(config.emberPouch.localDb).changes({
      since: 'now',
      live: true
    }).on('change', function () {
      recordArray.update();
    });
  }
});
