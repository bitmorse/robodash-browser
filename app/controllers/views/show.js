import Ember from 'ember';

export default Ember.Controller.extend({

  eventListener: function(){
    //begin listening to iframe events
    window.addEventListener("message",
      function(ev){
        if(ev.data.event === "visualizer:viewJSON"){
          console.log("robodash: will now save view");

          this.get('model').set('viewjson', ev.data.eventData);
          this.get('model').save().then(() => {
            console.log("saved viewJSON");
          });

        }else if(ev.data.event === "visualizer:switchedView"){
          console.log("robodash: switchedview! iframe probably ready");
          this.send("setVisualizerState", this.get('model'));

        }else if(ev.data.event === "visualizer:view"){
          if(ev.data.eventData.message === "viewSetSuccess"){
            console.log("robodash: visualizer viewJSON was loaded");
          }else{
            console.log("robodash: error: visualizer viewJSON was not loaded");
          }

        }

      }.bind(this),
    false);


  }.observes('model'),

  actions: {

    setVisualizerState: function(view) {
      console.log("robodash: setting visualizer state");
      var viewjson = view.get('viewjson');
      visualizerMessaging_setView(viewjson);

    },

    toggleSidebar() {
      console.log("toggling sidebar");
      $('.sidebar').toggleClass("visible");
    },

    saveVisualizerState(){
      console.log("save visualizer state");
      visualizerMessaging_getViewJSON();
    }


  }

});
