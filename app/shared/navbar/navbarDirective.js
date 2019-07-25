eShopApp.directive('navBar',function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/shared/navbar/navbar.html',
        scope:{

        },
        controller: function ($scope, session, cart, priceFilter, $route) {
            $scope.username = '';

            $scope.productsFilter = {
                minPrice: 0,
                maxPrice: 0
            };

            if(priceFilter.isFiltered())
                $scope.productsFilter = priceFilter.getFilter();

            let user = {
                username: 'please login'
            };
            if(session.isUserLogged())
                user = session.getLoggedInUser();

            $scope.username = user.username;

            $scope.numOfCartItems = 0;

            cart.getNumberOfCartItems(user.id)
                .then(function (response) {
                    $scope.numOfCartItems = response.data;
                })
                .catch(function () {
                    $scope.numOfCartItems = 0;
                });

            $scope.logout = function () {
                session.logout();
            };
            
            $scope.applyFilter = function () {
                priceFilter.addFilter($scope.productsFilter);
                $route.reload();
            };
            
            $scope.clearFilter = function () {
                priceFilter.clearFilter();
                $route.reload();
            } 
        }
    }
});
