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
      .state('signin', {
        url: '/signin/',
        templateUrl: 'signin/signin.html',
        controller: 'SigninCtrl',
        data: {
          permissions: {
            except: ['user'],
            redirectTo: 'home'
          }
        }
      })
      .state('home', {
        url: '/?search',
        parent: 'index',
        params: {
          search: null
        },
        views: {
          'header': {
            templateUrl: 'header/header.html',
            controller: 'HeaderCtrl'
          },
          'main': {
            templateUrl: 'body/body.html',
            controller: 'BodyCtrl'
          }
        },
        data: {
          permissions: {
            only: ['user'],
            redirectTo: 'signin'
          }
        }
      })
      .state('profile', {
        url: '/:uid',
        parent: 'index',
        views: {
          'header': {
            templateUrl: 'header/header.html',
            controller: 'HeaderCtrl'
          },
          'main': {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileCtrl'
          }
        },
        resolve: {
          userPromise: function(UserService, $stateParams) {
            return UserService.get($stateParams.uid);
          }
        },
        data: {
          permissions: {
            only: ['user'],
            redirectTo: 'signin'
          }
        }
      });
  }
})();
