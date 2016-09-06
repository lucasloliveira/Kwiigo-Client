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
  function Config($locationProvider, $urlRouterProvider, $authProvider, cfpLoadingBarProvider, uiGmapGoogleMapApiProvider, ENV) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: true
    }).hashPrefix('!');

    $urlRouterProvider.otherwise('/');
    cfpLoadingBarProvider.includeSpinner = false;

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAYZUFNBcOl3OoBN0xT017b9FIPTEu5ozY'
    });


    $authProvider.configure({
      apiUrl: ENV.apiEndpoint,
      omniauthWindowType: 'newWindow',
      authProviderPaths: {
        facebook: '/auth/facebook'
      }
    });
  }
})();
