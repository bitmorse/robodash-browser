import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    signup() {
      console.log("signup-form: attempting signup");
      let { username, email, password, password2 } = this.getProperties('username', 'email', 'password', 'password2');


      $.ajax({
        method: "POST",
        url: "https://core.robodash.io/api/users",
        data: {
            "username": username,
            "email": email,
            "password": password,
            "uuid": localStorage.getItem('robodash-userdb-uuid')
        },
        dataType: "json",
        success: function(){
          console.log("signup-form: signed up");

          this.get('session').authenticate('authenticator:pouchdb-authentication', email, password).catch((response)=>{
            this.set("errorMessage", response.error)
          });
        }.bind(this)
      });



    }
  }
});
