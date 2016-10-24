// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  
});

angular.module('app').directive('spacebarSupport', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      $('body').on('keypress', function(evt) {
        var videoEl = el[0];
        if(evt.keyCode === 32) {
          if(videoEl.paused) {
            videoEl.play();
          } else {
            videoEl.pause();
          }
        }
      });
    }
  }
})


