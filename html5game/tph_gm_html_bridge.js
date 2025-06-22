function notifyGameExit() {
  if (window.ReactNativeWebView?.postMessage) {
    window.ReactNativeWebView.postMessage("game_exit");
  }
}
