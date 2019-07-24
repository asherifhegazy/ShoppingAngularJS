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

    $routeProvider.when('/cart', {
        templateUrl:'app/components/cart/cartView.html',
        controller:'CartController',
        resolve: {
            cartItems: function (cart,session) {
                let id = 0;
                if(session.isUserLooged()) {
                    let user = session.getLoggedInUser();
                    id = user.id;
                }

                return cart.getCartItems(id);
            }
        }
    });

    $routeProvider.otherwise({redirectTo:'/home'});
    
    $locationProvider.html5Mode(true);
});