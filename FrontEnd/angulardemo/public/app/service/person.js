(function () {
  'use strict';

  angular.module('api', [])
    .factory('personService', function () {
      var persons = [
        {name: "Alice", city: "Princeton", country: "USA"},
        {name: "Steven", city: "Berlin", country: "Germany"},
        {name: "Bob", city: "Tokyo", country: "Japan"},
        {name: "Linda", city: "Beijing", country: "China"},
        {name: "Alex", city: "Paris", country: "France"},
        {name: "Frank", city: "London", country: "UK"},
        {name: "Tommy", city: "Shanghai", country: "China"}
      ];
      return {
        persons: persons
      };
    });
})();