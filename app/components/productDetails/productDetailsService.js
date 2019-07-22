eShopApp.factory('productDetails',function ($http) {
    return {
        getProductDetails: function (id) {
            return $http({method: 'GET', url: 'https://localhost:44302/api/Products/' + id});
        }
    }
});