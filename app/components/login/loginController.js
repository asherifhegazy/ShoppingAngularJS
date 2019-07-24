
eShopApp.controller('LoginController', function ($scope, login, session, patterns, $timeout, $location) {

    $scope.login = function (username, loginForm) {
        if (loginForm.$valid) {
            login.getUser(username)
                .then(function(response) {

                    if(response.data){
                        session.login(response.data);
                        toastr.success('Welcome ' + response.data.username);

                        $location.path('home');

                    }
                    else{
                        toastr.error('Incorrect Username');
                    }
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    };

    $scope.usernamePattern = patterns.usernamePattern;

});