(function(global) {

    var employeeService = {};

    employeeService = function($q, $http) {
        var url = "/employees";
        return {
            getAllEmployees: function() {
                var defer = $q.defer();
                $http.get(url).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getAllEmployee: function(name) {
                var defer = $q.defer();
                $http.get(url + "/" + name).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            addEmployee: function(employee) {
                var defer = $q.defer();
                $http.post(url, employee).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            editEmployee: function(employee) {
                var defer = $q.defer();
                $http.put(url, employee).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            deleteEmployee: function(name) {
                var defer = $q.defer();
                $http.delete(url + '/' + name).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            }
        };
    };

    global.employeeService = employeeService;

})(window);