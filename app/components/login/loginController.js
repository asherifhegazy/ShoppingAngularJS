eShopApp.controller('LoginController', function ($scope, login, session, PATTERNS, $location) {
    $scope.ready = false;

    $scope.login = function (username, loginForm) {
        $scope.ready = true;

        if (loginForm.$valid) {
            login.getUser(username)
                .then(function(response) {
                    if(response.data){
                        session.login(response.data);

                        $scope.ready = false;

                        toastr.success('Welcome ' + response.data.username);
                        $location.path('home');
                    }
                    else{
                        $scope.ready = false;

                        toastr.error('Incorrect Username');
                    }
                })
                .catch(function (response) {
                    $scope.ready = false;
                    
                    console.log(response);
                });
        }

    };

    $scope.usernamePattern = PATTERNS.username;

});