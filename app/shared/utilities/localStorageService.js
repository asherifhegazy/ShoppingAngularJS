eShopApp.factory('$localStorage', function ($window) {
    return {
        get: (key) => {
            return $window.localStorage[key];
        },
        set: (key, value) => {
            $window.localStorage[key] = value;
        },
        getObject: (key) => {
            return JSON.parse($window.localStorage[key]);
        },
        setObject: (key, value) => {
            $window.localStorage[key] = JSON.stringify(value);
        },
        isExists: (key) => {
            return !!$window.localStorage[key];
            // if($window.localStorage[key])
            //     return true;
            // return false;
        },
        remove: (key) => {
            $window.localStorage.removeItem(key);
        }
    }
});
