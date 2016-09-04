(function () {
  'use strict';

  angular.module('app')
    .config(Routes);

  // @ngInject
  function Routes($stateProvider) {
    $stateProvider
      .state('index', {
        url: '',
        abstract: true,
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        data: {
          // permissions: {
          //   only: ['user'],
          //   redirectTo: 'signin'
          // }
        }
      })
      .state('home', {
        url: '/',
        parent: 'index',
        views: {
          'header': {
            templateUrl: 'header/header.html',
            controller: 'HeaderCtrl'
          },
          'main': {
            templateUrl: 'body/body.html',
            controller: 'BodyCtrl'
          }
        }
      });
  }
})();
