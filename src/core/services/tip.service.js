(function() {
  'use strict';

  angular.module('app')
    .service('TipService', TipService);

  // @ngInject
  function TipService($http, ENV) {
    var base = '/api/v1/tips';

    this.create = function(tip) {
      return $http.post(ENV.apiEndpoint + base, {
        tip: tip
      });
    };

    this.byaddress = function(address) {
      return $http.post(ENV.apiEndpoint + base + '/byaddress', {
        address: address
      });
    };
  }
})();
