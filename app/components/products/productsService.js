eShopApp.factory('products', function ($http, config) {
    const productAPI = config.api + 'Products/';
    return {
        getProducts: function () {
            return $http({method: 'GET', url: productAPI});
        },

        getProductsFiltered: function (minPrice, maxPrice) {
            return $http({method: 'GET', url: productAPI + 'filter/' + minPrice + '/' + maxPrice});
        }
    }
});