eShopApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/login', {
        templateUrl:'app/components/login/loginView.html',
        controller:'LoginController'
    });

    $routeProvider.when('/home',{
        templateUrl:'app/components/products/productsView.html',
        controller:'ProductsController'
    });

    $routeProvider.when('/products/:id', {
        templateUrl:'app/components/productDetails/productDetailsView.html',
        controller:'ProductDetailsController'
    })
    
    // $locationProvider.html5Mode(true);
});