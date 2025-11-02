// Security enhancements for the web application
(function() {
  'use strict';

  // Prevent clickjacking by ensuring the page is not loaded in a frame
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

})();
