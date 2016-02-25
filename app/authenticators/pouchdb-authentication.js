import Base from 'ember-simple-auth/authenticators/base';
import config from 'robodash-browser/config/environment';
import PouchDB from 'pouchdb';

export default Base.extend({
  restore(data) {
    console.log("simple-auth: restore");
    console.log(data);

    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve(data);
    });
  },
  authenticate(username, password) {
    console.log("simple-auth: authenticate");


    /*

     MAKE SURE USER CANNOT LOGIN IF HIS DATABASE UUID
     MISMATCHES THE ONE ON THE SERVER!

     */

      var ajaxOpts = {
        ajax: {
          headers: {
            Authorization: 'Basic ' + window.btoa(username + ':' + password)
          }
        }
      };
      var localDb = config.emberPouch.localDbPrefix + localStorage.getItem('robodash-userdb-uuid');
      let remoteDb = new PouchDB(config.emberPouch.remoteCouch + localDb, {skipSetup: true});
      let db = new PouchDB(localDb);
      console.log("simple-auth: remote pouch: "+ config.emberPouch.remoteCouch + localDb);

      //AUTHENTICATE WITH THE REMOTE DATABASE

      return new Ember.RSVP.Promise(function(resolve, reject) {

      remoteDb.login(username, password, ajaxOpts).then(function(response) {
        console.log("simple-auth: login pass");

        remoteDb.getSession(function (err, response) {
          if (err) {
            // network error
          } else if (!response.userCtx.name) {
            // nobody's logged in
          } else {
            // response.userCtx.name is the current user

            remoteDb.getUser(response.userCtx.name, function (err, response) {
              if (err) {
                if (err.name === 'not_found') {
                  // typo, or you don't have the privileges to see this user
                  reject(err);
                } else {
                  // some other error
                }
              } else {
                // response is the user object

                var remoteCouchSession = {
                  id: response._id,
                  uuid: response.uuid,
                  email: response.email
                }

                console.log(remoteCouchSession);
                localStorage.setItem('robodash-userdb-uuid', response.uuid);

                resolve(remoteCouchSession);

                //turn on sync
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
            });

          }
        });

      }).catch(function(error) {
        console.log("login fail");
        console.error(error);
        reject(error);
      });

    });

  },
  invalidate(data) {
    console.log("simple-auth: invalidate");
  }
});
