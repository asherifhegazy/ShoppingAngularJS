eShopApp.factory('products', function ($http) {
    return {
        getProducts: function () {
            return $http({method: 'GET', url: 'https://localhost:44302/api/Products'});
        }
    }
});