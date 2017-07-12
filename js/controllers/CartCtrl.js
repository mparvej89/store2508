app.controller('CartCtrl', function ($scope, $location, $ionicModal, $ionicPopover, $ionicSideMenuDelegate, $timeout) {
    $scope.test = "This is Cart Page";

    $scope.Login = function Login() {

        $location.path('/app/login');

    };

});