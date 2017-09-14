angular.module('myApp')
  .controller('reportController', ['$scope', '$http', '$routeParams', 'commonService', function ($scope, $http, $routeParams, commonService) {
    $scope.planValue = commonService.getData();
    console.log("$scope.planValue" + angular.toJson($scope.planValue))
    $scope.value = $scope.planValue.value;
    $scope.options = {
      unit: "%",
      readOnly: true,
      subText: {
        enabled: true,
        text: ''+$scope.planValue.name+' value',
        color: 'gray',
        font: 'auto'
      },
      trackWidth: 40,
      barWidth: 25,
      trackColor: 'rgba(0,0,0,.2)',
      barColor: '#2CC185'
    };
  }])