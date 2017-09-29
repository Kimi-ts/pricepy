app.controller('sliderController', ["$scope", "$location", "getData", "dateService", function sliderController($scope, $location, getData, dateService){
    console.log("slider controller runs");
    $scope.banners = $scope.$parent.data.banners;
}])