import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('machines', function(){
    this.route('new');

    this.route('edit', {
      path: ':machine_id/edit'
    });

    this.route('show', {
      path: ':machine_id'
    },function(){
        this.route('connections', {resetNamespace:true}, function() {

          this.route('new');
          this.route('edit', {
            path: ':connection_id/edit'
          });

        });
      });
    });

  this.route('devices');
});

export default Router;
