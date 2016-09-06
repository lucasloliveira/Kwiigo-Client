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
      if(!address) return;
      $scope.loading = true;
      // $scope.tipsByUser = undefined;
      TipService.byaddress(address.formatted_address).then(function(response){
        $scope.tipsByUser = _.chain(response.data).groupBy('user.id').toPairs().map(function(array){array[0] = array[1][0]['user']; return array;}).value();
        $scope.loading = false;
      }, function(error){
        $scope.tipsByUser = undefined;
        $scope.loading = false;
      });
    }
  }
})();
