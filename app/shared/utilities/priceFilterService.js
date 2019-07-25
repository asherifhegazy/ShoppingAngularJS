eShopApp.factory('priceFilter',function ($localStorage) {
    return {
        getFilter: function() {
            return $localStorage.getObject('priceFilter');
        },

        addFilter: function (filter) {
            $localStorage.setObject('priceFilter',filter);
        },

        isFiltered: function () {
            return $localStorage.isExists('priceFilter');
        },

        clearFilter: function () {
            $localStorage.remove('priceFilter');
        }
    }
});
