angular
    .module('myApp', ['ngRoute','ui.knob'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'homeController'
            })
            .when('/report', {
                templateUrl: 'report.html',
                controller: 'reportController'
            })
            .otherwise({ redirectTo: '/' });
    }])
   