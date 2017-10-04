app.controller('homeController', ["$scope", "$location", "getData", "dateService", function homeController($scope, $location, getData, dateService){
    console.log("home controller runs");
    $scope.$parent.path = "/";
    $scope.showSlides = false;

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
        $scope.showSlides = true;
    })
}])