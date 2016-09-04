(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:BodyCtrl
   * @description
   * # BodyCtrl
   * Controller of the app
   */
  angular.module('app')
    .controller('BodyCtrl', Body);

  // @ngInject
  function Body($scope, $rootScope, $state, LocationService) {

    list();

    $scope.searchLocations = function(address) {
      if(address) {
        $state.go('search', {query: address.formatted_address});
      }
    };

    function list() {
      $scope.loading = true;
      LocationService.list().then(function(response) {
        $scope.loading = false;
        $scope.locations = response.data;
      });
    }
  }
})();
