import Ember from 'ember';

export default Ember.Component.extend({

  viewjson: '{}',

  init: function(){
    console.log("visualizer-iframe: init");
  },

  onDidRender: function(){
    console.log("visualizer-iframe: rendered");
    //this.set('viewjson', document.getElementById("visualizer-iframe").contentWindow);


    //console.log(this.get('viewjson'));
    //visualizerMessaging_setView

  }.on('didRender'),

  didUpdateAttrs(){
    this._super(...arguments);

    console.log("didUpdateAttrs");
  },

  didRender(){
    this._super(...arguments);

    console.log("didRender");
  }







});
