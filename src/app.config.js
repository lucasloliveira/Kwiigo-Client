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
    .module('app')
    .config(Config);

  // @ngInject
  function Config($locationProvider, $urlRouterProvider, $authProvider, cfpLoadingBarProvider, ENV) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: true
    }).hashPrefix('!');

    $urlRouterProvider.otherwise('/');
    cfpLoadingBarProvider.includeSpinner = false;

    $authProvider.configure({
      apiUrl: ENV.apiEndpoint,
      omniauthWindowType: 'newWindow',
      authProviderPaths: {
        facebook: '/auth/facebook'
      }
    });
  }
})();
