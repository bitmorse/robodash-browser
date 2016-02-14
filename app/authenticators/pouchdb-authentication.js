import Base from 'ember-simple-auth/authenticators/base';
import config from 'robodash-browser/config/environment';
import PouchDB from 'pouchdb';

export default Base.extend({
  restore(data) {
    console.log("simple-auth: restore");
  },
  authenticate(email, password) {
    console.log("simple-auth: authenticate");
    console.log("simple-auth: username = ");
    console.log(email);

    var ajaxOpts = {
      ajax: {
        headers: {
          Authorization: 'Basic ' + window.btoa(email+':'+password)
        }
      }
    };
    let remoteDb = new PouchDB(config.emberPouch.remoteDb, {skipSetup: true});
    return remoteDb.login(email, password, ajaxOpts);
  },
  invalidate(data) {
    console.log("simple-auth: invalidate");
  }
});
