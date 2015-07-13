(function contentScriptInit() {

  var obishStyle = document.createElement('link');
  obishStyle.href = chrome.extension.getURL('../assets/css/obish-gitlab.css');
  obishStyle.rel = 'stylesheet';

  obishStyle.onLoad = function() {
    this.parentNode.removeChild(this);
  };

  (document.head || document.documentElement).appendChild(obishStyle);

  document.addEventListener("DOMContentLoaded", function(event) {
    var links = document.head.getElementsByTagName('link');

    for (var i = 0; i < links.length; i++) {
      var link = links.item(i);
      var shouldRemove = (
        'stylesheet' === link.getAttribute('rel') &&
        'all' === link.getAttribute('media')
      );

      if (shouldRemove) {
        //document.head.removeChild(link);
      }
    }

    document.head.appendChild(obishStyle);
  });

})();
