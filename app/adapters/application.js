import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'robodash-browser/config/environment';
import Ember from 'ember';

//turn on debugging
PouchDB.debug.enable('*');


const { assert, isEmpty } = Ember;

function createDb() {
  let localDb = config.emberPouch.localDb;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  console.log("created local pouch");
  console.log("remote pouch: "+config.emberPouch.remoteDb);


  if (config.emberPouch.remoteDb) {
    let remoteDb = new PouchDB(config.emberPouch.remoteDb);

    console.log("config remote pouch");

    db.sync(remoteDb, {
      live: true,
      retry: true
    }).on('change', function (info) {
      // handle change
      console.log('pouchdb change');
    }).on('paused', function () {
      // replication paused (e.g. user went offline)
      console.log('pouchdb pause');

    }).on('active', function () {
      // replicate resumed (e.g. user went back online)
      console.log('pouchdb active');

    }).on('denied', function (info) {
      // a document failed to replicate, e.g. due to permissions
      console.log('pouchdb denied');

    }).on('complete', function (info) {
      // handle complete
      console.log('pouchdb complete');

    }).on('error', function (err) {
      // handle error
      console.log('pouchdb error');

    });
  }

  return db;
}

export default Adapter.extend({
  init() {
    console.log("init pouch");
    this._super(...arguments);
    this.set('db', createDb());
  }
});
