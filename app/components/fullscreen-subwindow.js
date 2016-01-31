import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    exit(){
      console.log("cancel from fullscreen-subwindow");
      this.sendAction('exit');
      return true;
    }
  }

});
