import Ember from 'ember';
import config from './config/environment';
import LoadingSliderMixin from './mixins/loading-slider';

const Router = Ember.Router.extend(LoadingSliderMixin, {
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

        this.route('views', {resetNamespace:true}, function() {
          this.route('new');
          this.route('edit', {
            path: ':view_id/edit'
          });
          this.route('show', {
            path: ':view_id'
          });
        });


        this.route('devices', {resetNamespace:true}, function() {
          this.route('new');
          this.route('edit', {
            path: ':device_id/edit'
          });
          this.route('show', {
            path: ':device_id'
          });
        });


      });
    });

  this.route('devices');
  this.route('login');
  this.route('signup');
});

export default Router;
