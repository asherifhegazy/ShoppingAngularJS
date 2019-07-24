eShopApp.factory('session', function ($localStorage) {
    return {
        getLoggedInUser: function () {
            return $localStorage.getObject('user');
        },

        logout: function () {
            $localStorage.remove('user');
        },

        login: function (user) {
            $localStorage.setObject('user', user);
        },

        isUserLooged: function () {
            return $localStorage.isExists('user');
        }
    }

});

