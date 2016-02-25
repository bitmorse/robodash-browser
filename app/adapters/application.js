import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'robodash-browser/config/environment';
import Ember from 'ember';

//turn on debugging
//PouchDB.debug.enable('*');

const { assert, isEmpty } = Ember;

function createDb(localDbUUID, session) {
  assert('localDbUUID arg must be set', !isEmpty(localDbUUID));
  console.log("creating user db "+localDbUUID);

  let db = new PouchDB(config.emberPouch.localDbPrefix + localDbUUID);

  console.log("created local pouch");
  console.log("user isAuthenticated: " + session.get('isAuthenticated'));

  return db;
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export default Adapter.extend({
  session: Ember.inject.service('session'),

  //switch to machine DB here

  changeLocalDb(dbRealm, dbName) {
    console.log("adapter: changing to "+ dbRealm + "%2F" + dbName);

    let localDb = new PouchDB(dbRealm + "%2F" + dbName)
    this.changeDb(localDb);

    //make sure the db above is created remotely and replicates to remote
  },

  shouldReloadAll(){
    return false;
  },

  init() {
    console.log("init pouch");
    this._super(...arguments);

    var localDbUUID = localStorage.getItem('robodash-userdb-uuid');
    if(localDbUUID === null){
      console.log("application_adapter: new user uuid");
      localDbUUID = generateUUID();
      localStorage.setItem('robodash-userdb-uuid', localDbUUID);
    }

    this.set('db', createDb(localDbUUID, this.get('session')));
  }
});
