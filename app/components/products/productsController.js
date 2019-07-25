eShopApp.controller('ProductsController', function ($scope, $route) {

    $scope.products = $route.current.locals.products.data;

});
