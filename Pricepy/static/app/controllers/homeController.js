app.controller('homeController', function homeController($scope, $location, getData){
    console.log("home controller runs");
    $scope.$parent.path = "/";

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        console.log($scope.data);
    })
})