eShopApp.directive('navBar',function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/shared/navbar/navbar.html',
        scope:{

        },
        controller: function ($scope, session, cart) {
            $scope.username = '';

            let user = {
                username: 'please login'
            };
            if(session.isUserLooged())
                user = session.getLoggedInUser();

            $scope.username = user.username;

            $scope.numOfCartItems = 0;

            cart.getCartItems(user.id)
                .then(function (response) {
                    $scope.numOfCartItems = response.data.length;
                })
                .catch(function () {
                    $scope.numOfCartItems = 0;
                });

            $scope.logout = function () {
                session.logout();
            }
        }
    }
});