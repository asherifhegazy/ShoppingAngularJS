eShopApp.factory('cart',function ($http, config, session) {
    // let user = session.getLoggedInUser();

    const cartAPI = config.api + 'CartItems/';

    return {
        getCartItems: function (userId) {
            return $http({method: 'GET', url: cartAPI + userId});
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
            return $http({method: 'POST', url: config.api + 'Orders/' + user.id});
        }
    }
});