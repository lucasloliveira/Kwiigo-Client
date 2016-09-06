(function() {
  'use strict';

  angular.module('app')
    .service('UserService', UserService);

  // @ngInject
  function UserService($http, ENV) {
    var base = '/api/v1/users';

    this.get = function(uid) {
      return $http.get(ENV.apiEndpoint + base, {
        params: {
          uid: uid
        }
      });
    };
  }
})();
