import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('machines', function(){
    this.route('new');
  });
  this.route('connections');
  this.route('devices');
});

export default Router;
