app.controller('homeController', function homeController($scope, $location){
    console.log("home controller runs");
    $scope.$parent.path = "/";

    $scope.data = $scope.$parent.data.home;
    console.log($scope.data);
})