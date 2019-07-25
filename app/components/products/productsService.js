eShopApp.factory('products', function ($http, config) {
    const productAPI = config.api + 'Products/';
    return {
        getProducts: function () {
            return $http({method: 'GET', url: productAPI});
        }
    }
});