eShopApp.controller('LoginController', function ($scope, login, $cookieStore, $window) {
    $scope.login = function (username, loginForm) {
        if (loginForm.$valid) {
            login.getUser(username)
                .then(function(response) {

                    if(response.data){
                        $cookieStore.put('user',JSON.stringify(response.data));
                        toastr.success('Welcome ' + response.data.username);
                        $window.location = "#/home";
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

    $scope.usernamePattern = /^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9]*)$/;

});