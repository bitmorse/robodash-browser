import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      console.log("login-form: attempting authentication");
      let { email, password } = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:pouchdb-authentication', email, password).catch((response)=>{
        this.set("errorMessage", response.message)
      });
    }
  }
});
