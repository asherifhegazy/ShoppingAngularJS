eShopApp.factory('productDetails',function ($http, API) {
    return {
        getProductDetails: function (id) {
            return $http({method: 'GET', url: API.baseUrl + API.products + id});
        }
    }
});