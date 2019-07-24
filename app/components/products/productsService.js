eShopApp.factory('products', function ($http, config) {
    return {
        getProducts: function () {
            return $http({method: 'GET', url: config.api + 'Products'});
        }
    }
});