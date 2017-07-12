app.controller('HomeCtrl', function ($scope, $location, $ionicModal, $ionicPopover, Camera, $ionicSideMenuDelegate, $timeout) {
    $scope.test="Main Page";

    $scope.Login = function Login(){

        $location.path('/app/login');

    };

});