eShopApp.controller('ProductDetailsController',function ($scope, $route) {
    $scope.product = $route.current.locals.product.data;
    $scope.stepper = 1;

    $scope.stepperMinusEnabled = true;

    $scope.stepperPlusEnabled = false;

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

});