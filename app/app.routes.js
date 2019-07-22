eShopApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/login', {
        templateUrl:'app/components/login/loginView.html',
        controller:'LoginController'
    });

    $routeProvider.when('/home',{
        templateUrl:'app/components/products/productsView.html',
        controller:'ProductsController',
        resolve: {
            products: function (products) {
                return products.getProducts();
            }
        }
    });

    $routeProvider.when('/products/:id', {
        templateUrl:'app/components/productDetails/productDetailsView.html',
        controller:'ProductDetailsController',
        resolve: {
            product: function ($route, productDetails) {
                return productDetails.getProductDetails($route.current.pathParams.id);
            }
        }
    });

    $routeProvider.otherwise({redirectTo:'/home'});
    
    // $locationProvider.html5Mode(true);
});