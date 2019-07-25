eShopApp.controller('ProductDetailsController',function ($scope, $route, session, productDetails, cart, $location) {
    $scope.isDisabled = !session.isUserLogged();

    $scope.product = $route.current.locals.product.data;

    $scope.stepper = 1;

    $scope.stepperMinusEnabled = true;

    $scope.stepperPlusEnabled = false;

    $scope.ready = false;

    $scope.addQuantity = function () {
        if($scope.product.quantity > $scope.stepper){
            $scope.stepper++;
            $scope.stepperMinusEnabled = false;

            // check stepper after adding again
            ($scope.product.quantity > $scope.stepper) ? $scope.stepperPlusEnabled = false: $scope.stepperPlusEnabled = true;
        }
    };

    $scope.removeQuantity = function () {
        if($scope.stepper > 1){
            $scope.stepper--;
            $scope.stepperPlusEnabled = false;

            ($scope.stepper > 1) ? $scope.stepperMinusEnabled = false: $scope.stepperMinusEnabled = true;
        }
    };

    $scope.prevImage = function () {
        angular.element('#productImagesCarousel').carousel('prev');
    };

    $scope.nextImage = function () {
        angular.element('#productImagesCarousel').carousel('next');
    };
    
    $scope.addToCart = function () {
        $scope.ready = true;

        let cartItem = {
            UserId: session.getLoggedInUser().id,
            ProductId: $scope.product.id,
            Quantity: $scope.stepper
        };

        cart.addCartItem(cartItem)
            .then(function (response) {
                $scope.ready = false;

                toastr.success('Cart updated successfully');
                $location.path('home')
            })
            .catch(function (response) {
                $scope.ready = false;

                toastr.error('Something Went Wrong');
            });
    }

});
