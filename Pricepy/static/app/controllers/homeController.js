app.controller('homeController', function homeController($scope, $location, getData){
    console.log("home controller runs");
    $scope.$parent.path = "/";

    getData.then(function(data){
        $scope.data = data.home;
        console.log($scope.data);
    })
})