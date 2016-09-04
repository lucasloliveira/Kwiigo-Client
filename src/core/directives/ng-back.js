/*
 This directive allows us to add a history back function to an HTML element
 */
(function() {
  'use strict';

  angular
    .module('app')
    .directive('ngBack', NgBack);

    // @ngInject
    function NgBack($window) {
      return function (scope, elem, attrs) {
        elem.bind('click', function (event) {
          $window.history.back();
        });
      };
    }
})();