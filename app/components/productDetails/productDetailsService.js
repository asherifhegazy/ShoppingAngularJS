eShopApp.factory('productDetails',function ($http, config) {
    return {
        getProductDetails: function (id) {
            return $http({method: 'GET', url: config.api + 'Products/' + id});
        }
    }
});