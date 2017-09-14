angular.module('myApp')
    .controller('homeController', ['$scope', '$http','commonService', function ($scope, $http,commonService) {
      $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    });
    $scope.planDetails={};
    var planArray=[];
    $scope.SubmitPlan=function(){
        commonService.saveData($scope.planDetails)
    }

    }])
