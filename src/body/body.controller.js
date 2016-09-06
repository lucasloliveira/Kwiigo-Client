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
  function Body($scope, $http, $stateParams, TipService) {

    if($stateParams.search) {
      $scope.loading = true;
      $scope.search($stateParams.search);
    }
    
    $scope.search = function(address) {
      $scope.loading = true;
      if(!address) return;
      TipService.byaddress(address.formatted_address).then(function(response){
        $scope.results = response.data;
        $scope.loading = false;
      }, function(error){
        console.log('shit happened: ' + error);
        $scope.loading = false;
      });
    }
  }
})();
