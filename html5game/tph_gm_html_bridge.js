console.log("Bridge JS loaded");

window.restoreGameData = function (data) {
  console.warn("In windows.restoreDAta, calling gml_Script_restoreGameData");
  //gml_Script_restoreGameData(data);
};

function notifyMessage(data) {
  if (window.ReactNativeWebView?.postMessage) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "message",
        payload: data,
      })
    );
  }
}

function notifyGameExit() {
  if (window.ReactNativeWebView?.postMessage) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "game_exit",
      })
    );
  }
}

function notifyGameSave(data) {
  if (window.ReactNativeWebView?.postMessage) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "game_save",
        payload: data,
      })
    );
  }
}

function notifyGameLoad() {
  if (window.ReactNativeWebView?.postMessage) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "game_load",
      })
    );
  }
}
