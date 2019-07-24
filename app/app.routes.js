eShopApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/login', {
        templateUrl:'app/components/login/loginView.html',
        controller:'LoginController'
    });
    
    $locationProvider.html5Mode(true);
});