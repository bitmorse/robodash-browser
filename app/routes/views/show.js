import Ember from 'ember';

export default Ember.Route.extend({


  actions: {
      didTransition: function() {
        console.log("robodash: canvas is ready for visualizer");
        var viewjson = this.modelFor("views/show").get('viewjson');
        visualizerMessaging_setView(viewjson);
      }
  }


});
