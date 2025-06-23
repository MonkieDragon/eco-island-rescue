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

function gameLoad(jsonString) {
  try {
    const data = JSON.parse(jsonString);

    // Send data into a bound GML script
    if (window.gml_Script_restoreGameData) {
      gml_Script_restoreGameData(data);
    } else {
      console.warn("restoreGameData GML script not found.");
    }
  } catch (e) {
    console.error("Error in loadGame:", e);
  }
}
