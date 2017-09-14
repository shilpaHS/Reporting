angular.module('myApp').service('commonService',['$filter','$http','$q', function($filter,$http,$q) {
var planData={};
this.saveData=function(data){
    planData=data;
}
this.getData=function(){
   return planData;
}
}])