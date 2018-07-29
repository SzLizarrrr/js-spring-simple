var app = angular.module('mainApp', ['ui.router', 'api']);
app.controller('personCtrl', ['$scope', 'personService', function ($scope, personService) {
  $scope.persons = personService.persons;
}]);
app.controller('personDetailCtrl', ['$scope', '$stateParams', 'personService', function ($scope, $stateParams, personService) {
  var name = $stateParams.name;
  $scope.person = personService.persons.find(function(p) {
    return p.name == name;
  });
}]);
app.config(['$stateProvider', function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'ui-template/home.html'
  };
  var personState = {
    name: 'person',
    url: '/person',
    templateUrl: 'ui-template/person.html',
    controller: 'personCtrl'
  };
  var personDetailState = {
    name: 'person.detail',
    url: '/:name',
    templateUrl: 'ui-template/person-detail.html',
    controller: 'personDetailCtrl'
  };
  $stateProvider.state(homeState)
    .state(personState)
    .state(personDetailState);
}]);