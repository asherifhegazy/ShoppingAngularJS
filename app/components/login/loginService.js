eShopApp.factory('login', function ($http) {
    return {
        getUser: function (username) {
            return $http({method: 'GET', url: 'https://localhost:44302/api/Users/user/' + username});
        }
    }
});