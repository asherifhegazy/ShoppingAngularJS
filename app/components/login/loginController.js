eShopApp.controller('LoginController', function ($scope, login, $window, session, patterns) {
    $scope.login = function (username, loginForm) {
        if (loginForm.$valid) {
            login.getUser(username)
                .then(function(response) {

                    if(response.data){
                        session.login(response.data);
                        toastr.success('Welcome ' + response.data.username);
                        $window.location = "home";
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