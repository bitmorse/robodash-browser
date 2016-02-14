import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


/*The session service also provides the authenticationSucceeded and
 invalidationSucceeded events that are triggered whenever the session
  is successfully authenticated or invalidated (which not only happens
  when the user submits the login form or clicks the logout button but
  also when the session is authenticated or invalidated in another tab or
   window of the application). To have these events handled automatically,
    simply mix ApplicationRouteMixin into the application route: */
export default Ember.Route.extend(ApplicationRouteMixin);
