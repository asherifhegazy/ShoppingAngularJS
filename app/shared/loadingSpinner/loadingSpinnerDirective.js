eShopApp.directive('loadingSpinner',function () {
    return{
        restrict: 'E',
        templateUrl: 'app/shared/loadingSpinner/loadingSpinner.html',
        scope: {
            ready: '='
        }
    }
});