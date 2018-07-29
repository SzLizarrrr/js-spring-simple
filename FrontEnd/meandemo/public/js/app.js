var app = angular.module("mainApp", ["ngRoute", "ngResource"]);

// routes
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "template/home.html",
        controller: "homeCtrl"
    }).when("/add", {
        templateUrl: "template/add.html",
        controller: "addCtrl"
    }).when("/edit/:name", {
        templateUrl: "template/edit.html",
        controller: "editCtrl"
    }).otherwise({
        redirectTo: "/home"
    });
}]);

//controllers
app.controller("mainCtrl", ["$scope", function($scope) {
    $scope.arr = [1, 2, 3]
}]);

app.controller("homeCtrl", ["$scope", "$location", "employeeService", function($scope, $location, employeeService) {
    $scope.employees=[];
    employeeService.getAllEmployees().then(function(res) {
        $scope.employees = res;
    });
    $scope.edit = function(index) {
        $location.path('/edit/' + $scope.employees[index].name);
    };
    $scope.delete = function(index) {
        employeeService.deleteEmployee($scope.employees[index].name).then(function(res) {
            if(res.success) {
                $scope.employees.splice(index, 1);
            } else {
                $scope.err = res.message;
            }
        });
    };
    $scope.delete = function(index) {
        employeeService.deleteEmployee($scope.employees[index].name).then(function(res) {
            if(res.success) {
                $scope.employees.splice(index, 1);
            } else {
                $scope.err = res.message;
            }
        });
    };
    $scope.orderByCol = "name";
    $scope.reverse = false;
    $scope.changeOrderByCol = function(colName) {
        $scope.orderByCol = colName;
        $scope.reverse = !$scope.reverse;
    };
    $scope.searchByChange = $scope.searchTextChange = function () {
        $scope.searchObj = {};
        switch ($scope.searchBy) {
            case 'name':
                $scope.searchObj[$scope.searchBy] = $scope.searchText;
                break;
            case 'city':
            case 'state':
                $scope.searchObj.address = {};
                $scope.searchObj.address[$scope.searchBy] = $scope.searchText;
                break;
            default:
                $scope.searchObj = $scope.searchText;
        }
    };
}]);

app.controller("addCtrl", ["$scope", "$location", "employeeService", "statesService", function($scope, $location, employeeService, statesService) {
    $scope.states = statesService.states;
    $scope.submit = function() {
        employeeService.addEmployee($scope.employee).then(function(res) {
            if(res.success) {
                $location.path('/home');
            } else {
                $scope.err = res.message;
            }
        });
    };
}]);


app.controller("editCtrl", ["$scope", "$location", "$routeParams", "employeeService", "statesService", function($scope, $location, $routeParams, employeeService, statesService) {
    $scope.states = statesService.states;
    employeeService.getAllEmployee($routeParams.name).then(function(res) {
        $scope.employee = res;
    });
    $scope.submit = function() {
        employeeService.editEmployee($scope.employee).then(function(res) {
            if(res.success) {
                $location.path('/home');
            } else {
                $scope.err = res.message;
            }
        });
    }
}]);

// services
app.value("statesService", {
    states: [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]
});

app.factory("employeeService", ["$q", "$http", employeeService]);

//directives
app.directive("ageValidator", function() {
    return {
        require: "ngModel",
        link: function(scope, elem, attr, ctrl) {
            ctrl.$validators.ageValidator = function(modelValue, viewValue) {
                if(modelValue < 150 && modelValue >= 0) {
                    return true;
                }
                return false;
            }
        }
    };
});

app.directive("meanSearch", function () {
    return {
        templateUrl: "template/mean-search.html",
        scope: false,
        link: function (scope, elem, attr) {

        }
    };
});

app.directive("meanAgeFilter", function () {
    return {
        templateUrl: "template/mean-age-filter.html",
        scope: {
            minAge: '=',
            maxAge: '='
        },
        link: function (scope, elem, attr) {

        }
    };
});

// filter
app.filter("ageFilter", function() {
    return function(items, min, max) {
        min = min || Number.MIN_VALUE;
        max = max || Number.MAX_VALUE;
        return items.filter(function(item) {
            return item.age >= min && item.age <= max;
        });
    };
});