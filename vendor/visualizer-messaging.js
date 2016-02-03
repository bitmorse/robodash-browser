(function () {
  console.log("visualizer-messaging: initialising");
})();

function visualizerMessaging_test(){
  console.log("function call works");
}

function visualizerMessaging_getViewJSON(viewjson){
  //sending a save request
  $("#visualizer-iframe")[0].contentWindow.postMessage(
    {event: "visualizer:getViewJSON"},
    "*"
  );
}

function visualizerMessaging_setView(viewjson){
  $("#visualizer-iframe")[0].contentWindow.postMessage(
    {event: "visualizer:setViewJSON", eventData: viewjson},
    "*"
  );
}
