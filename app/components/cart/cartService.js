eShopApp.factory('cart',function ($http, API) {

    const cartAPI = API.baseUrl + API.cart;

    return {
        getCartItems: function (userId) {
            return $http({method: 'GET', url: cartAPI + userId});
        },

        getNumberOfCartItems: function(userId) {
            return $http({method: 'GET', url: cartAPI + 'count/' + userId});
        },

        addCartItem: function (item) {
            return $http({method: 'POST', url: cartAPI, data: item});
        },

        removeItemFromCart: function (userId, productId) {
            let item = {
                UserId: userId,
                ProductId: productId
            };

            return $http({method: 'DELETE', url: cartAPI, data:item, headers: {'Content-Type': 'application/json'}});
        },

        submitOrder: function (userId) {
            return $http({method: 'POST', url: API.baseUrl + API.orders + userId});
        }
    }
});
