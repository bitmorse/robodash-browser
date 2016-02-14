import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      console.log("login-form: attempting authentication");
      let { email, password } = this.getProperties('email', 'password');


      this.get('session').authenticate('authenticator:pouchdb-authentication', email, password).then((response)=>{
        console.log("login-form: authed");
      }, (err) => {
        this.set("errorMessage", "E-Mail or password incorrect.")
      });
    }
  }
});
