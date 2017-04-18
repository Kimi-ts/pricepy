app.controller('galleryController', function galleryController($scope, getData){
    console.log("gallery controller runs");
    $scope.$parent.path = "/gallery";

    console.log("route data")
    console.log($routeParams);

    getData.getContent("/api/Values", "machines").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
        console.log("machines data:");
        console.log($scope.data);
    })
})