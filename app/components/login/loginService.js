eShopApp.factory('login', function ($http, API) {
    return {
        getUser: function (username) {
            return $http({method: 'GET', url: API.baseUrl + API.login + 'user/' + username});
        }
    }
});
