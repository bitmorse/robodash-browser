import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(
  KeyboardShortcuts,

  {
    actions: {

      save() {
        console.log("saving view");
        this.modelFor("views/edit").save().then(()=>{
          this.transitionTo('views');
        });
        return false;
      },


      delete(view){
        //disassociate  and delete view
        view.deleteRecord();
        view.save().then(()=>{
          view.get('machine').save().then(()=>{
            this.transitionTo('views');
          });

        });
      },
      //KB actions
      saveVisualizerState() {

      },

      toggleSidebar() {

      },
    },

    keyboardShortcuts: {
      // trigger 'cancel' action when esc is pressed
      'esc' : 'cancel',

      'mod+s' : {
        action         : 'saveVisualizerState', // action to trigger
        global         : false,    // whether to trigger inside input (default: true)
        preventDefault : true     // (default: true)
      },

      'mod+g' : {
        action         : 'toggleSidebar', // action to trigger
        global         : false,    // whether to trigger inside input (default: true)
        preventDefault : true     // (default: true)
      },

      // trigger function when tab is pressed
      tab : function() {
        console.log('Tab pressed');
        return false; // preventDefault
      }
    }


});
