var app = angular.module("mainApp", ["ngRoute", "ngResource"]);

app.controller("mainCtrl", ["$scope", function($scope) {

}]);

app.controller("homeCtrl", ["$scope", "$location", "employeeService", function($scope, $location, employeeService) {
    employeeService.getAllEmployees().then(function(res) {
        $scope.employees = res;
    });
}]);

app.controller("loginCtrl", ["$scope", "$location", "authService", function($scope, $location, authService) {
    $scope.submit = function() {
    	authService.login($scope.user).then(function(res) {
            if(res.success) {
                $location.path('/home');
            } else {
                $scope.err = res.message;
            }
        });
    };
}]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "template/home.html",
        controller: "homeCtrl"
    }).when("/login", {
        templateUrl: "template/login.html",
        controller: "loginCtrl"
    }).otherwise({
        redirectTo: "/home"
    });
}]);

app.factory("employeeService", ["$q", "$http", employeeService]);
app.factory("authService", ["$q", "$http", authService]);