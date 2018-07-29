(function(global) {

    var authService = {};

    authService = function($q, $http) {
        var url = "/JavaRESTDemo/auth";
        return {
            login: function(user) {
                var defer = $q.defer();
                $http({
                    method: 'POST',
                    url: url + '/login',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: user
                }).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            }
        };
    };

    global.authService = authService;

})(window);