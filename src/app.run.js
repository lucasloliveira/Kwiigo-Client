(function () {
  'use strict';

  angular.module('app')
    .run(Run);

  // @ngInject
  function Run($rootScope, $state, Permission, $auth) {

    $rootScope.$on('auth:validation-success', function(event, user) {
      loggedSuccess(event, user);
    });

    $rootScope.$on('auth:validation-error', function() {
      logout();
    });

    $rootScope.$on('auth:login-success', function(event, user) {
      loggedSuccess(event, user);
    });

    $rootScope.$on('auth:logout-success', function() {
      logout();
    });

    var loggedSuccess = function(event, user) {
      // $state.go('logged');
      $rootScope.logged = true;
      $rootScope.user = user;
      $state.go('home');
    };

    var logout = function() {
      $rootScope.logged = false;
      $rootScope.user = undefined;
      $state.go('signin');
    };

    Permission.defineRole('user', function(){
      return $auth.validateUser();
    });
  }
})();
