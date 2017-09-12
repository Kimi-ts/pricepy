app.controller('homeController', ["$scope", "$location", "getData", "dateService", function homeController($scope, $location, getData, dateService){
    console.log("home controller runs");
    $scope.$parent.path = "/";

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
        $scope.isDisplayAction = data.action != null && !dateService.isExpired(data.action.finishDateTime);
    })
}])