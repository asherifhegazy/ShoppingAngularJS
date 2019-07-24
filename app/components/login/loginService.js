eShopApp.factory('login', function ($http, config) {
    return {
        getUser: function (username) {
            return $http({method: 'GET', url: config.api + 'Users/user/' + username});
        }
    }
});
