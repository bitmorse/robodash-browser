import Ember from 'ember';
import config from 'robodash-browser/config/environment';

export default Ember.Component.extend({

  src: Ember.computed('devsrc', 'prodsrc', {
    get(){
      if (config.environment === 'production') {
        return this.get('prodsrc');
      }else{
        return this.get('devsrc');
      }
    }
  })


});
