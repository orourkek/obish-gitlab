(function contentScriptInit() {

  var link = document.createElement('link');
  link.href = chrome.extension.getURL('../assets/css/ob-gitlab.css');
  link.rel = 'stylesheet';

  link.onLoad = function() {
    this.parentNode.removeChild(this);
  };

  (document.head || document.documentElement).appendChild(link);

})();
