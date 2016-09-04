/*
 This directive allows us to pass a function in on an enter key to do what we want.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .directive('ngEnter', NgEnter);

  // @ngInject
  function NgEnter() {
    return function (scope, element, attrs) {
      element.bind('keydown keypress', function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  }
})();