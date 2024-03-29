(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app
   * @description
   * # app
   *
   * Main module of the application.
   */
  angular
    .module('app', [
      'config',
      'ui.router',
      'ng-token-auth',
      'permission',
      'ui.bootstrap',
      'uiGmapgoogle-maps',
      'angular-loading-bar',
      'google.places',
      'ipCookie'
    ]);
})();
