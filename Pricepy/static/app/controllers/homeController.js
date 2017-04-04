app.controller('homeController', function homeController($scope, $location, getData){
    console.log("home controller runs");
    $scope.$parent.path = "/";

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        console.log($scope.data);
    })
})