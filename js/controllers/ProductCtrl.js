app.controller('ProductCtrl', function ($scope, $location, $ionicModal, $ionicPopover, $ionicSideMenuDelegate, $timeout) {
    $scope.test = "This is Product Page";

    $scope.Login = function Login() {

        $location.path('/app/login');

    };

});