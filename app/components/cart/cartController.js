eShopApp.controller('CartController',function ($scope, $route, cart, session, $location) {
    $scope.cartItems = [];

    $scope.isEmpty = false;

    $scope.ready = false;

    $scope.cartItems = $route.current.locals.cartItems.data;

    if($scope.cartItems.length === 0) {
        $scope.isEmpty = true;
        toastr.warning('Cart is Empty');
    }

    $scope.cartItems.forEach(function (element) {

        element.inStock = element.quantity <= element.product.quantity;
    });

    $scope.removeItem = function (item) {
        $scope.ready = true;

        cart.removeItemFromCart(item.userId, item.productId)
            .then(function (response) {
                $scope.ready = false;

                toastr.success('Item Removed Successfully');
                $route.reload();
            })
            .catch(function (response) {
                $scope.ready = false;

                toastr.error('Something Went Wrong');
            });

    };

    $scope.submitOrder = function () {
        $scope.ready = true;

        cart.submitOrder(session.getLoggedInUser().id)
            .then(function (response) {
                $scope.ready = false;

                toastr.success('Order was submitted successfully');
                $location.path('home');
            })
            .catch(function (response) {
                $scope.ready = false;

                toastr.error('Something Went Wrong');
            });
    }
});
