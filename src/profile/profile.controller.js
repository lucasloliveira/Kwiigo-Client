(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the app
   */
  angular.module('app')
    .controller('ProfileCtrl', Profile);

  // @ngInject
  function Profile($scope, $timeout, uiGmapIsReady, userPromise) {

    $scope.user = userPromise.data;

    $scope.map = {
      center: {
        latitude: 21.496201,
        longitude: 2.121919
      },
      zoom: 2
    };

    $scope.markers = [];

    $scope.$watch($scope.active, function() {
      $timeout(function() {
        uiGmapIsReady.promise().then(function () {
          $scope.user.tips.map(function(tip) {
            $scope.markers.push({
              id: tip.id,
              coords: {
                latitude: tip.latitude,
                longitude: tip.longitude
              }
            });
          });
        });
      }, 0);
    });
  }

})();
