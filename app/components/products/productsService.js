eShopApp.factory('products', function ($http, API) {
    const productAPI = API.baseUrl + API.products;
    return {
        getProducts: function () {
            return $http({method: 'GET', url: productAPI});
        },

        getProductsFiltered: function (minPrice, maxPrice) {
            return $http({method: 'GET', url: productAPI + 'filter/' + minPrice + '/' + maxPrice});
        }
    }
});