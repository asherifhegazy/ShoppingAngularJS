eShopApp.controller('CartController',function ($scope, $route, cart, session, $location) {
    $scope.cartItems = [];

    $scope.isEmpty = false;

    $scope.cartItems = $route.current.locals.cartItems.data;

    if($scope.cartItems.length === 0) {
        $scope.isEmpty = true;
        toastr.warning('Cart is Empty');
    }

    $scope.cartItems.forEach(function (element) {

        element.inStock = element.quantity <= element.product.quantity;
    });

    $scope.removeItem = function (item) {
        // $scope.cartItems.splice();
        cart.removeItemFromCart(item.userId, item.productId)
            .then(function (response) {
                toastr.success('Item Removed Successfully');
            })
            .catch(function (response) {
                toastr.error('Something Went Wrong');
            });

        $route.reload();
    };

    $scope.submitOrder = function () {
        cart.submitOrder(session.getLoggedInUser().id)
            .then(function (response) {
                toastr.success('Order was submitted successfully');
                $location.path('home');
            })
            .catch(function (response) {
                toastr.error('Something Went Wrong');
            });
    }
});