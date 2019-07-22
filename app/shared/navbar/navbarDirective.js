eShopApp.directive('navBar',function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/shared/navbar/navbar.html',
        scope:{

        },
        controller: function ($scope, session) {
            $scope.username = session.getLoggedInUser().username;

            $scope.logout = function () {
                session.logout();
            }
        }
    }
});