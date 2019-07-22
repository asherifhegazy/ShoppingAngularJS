eShopApp.factory('session', function ($cookieStore) {
    return {
        getLoggedInUser: function () {
            return $cookieStore.get('user');
        },

        logout: function () {
            $cookieStore.remove('user');
        }
    }
});
