app.controller('machinesController', function machinesController($scope, getData){
    console.log("machines controller runs");
    $scope.$parent.path = "/machines";
    console.log("before-------------load");

    getData.getContent("/api/Values", "machines").then(function(data){
        $scope.data = data;
        console.log("after----------load");
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
        console.log($scope.data);
    })
})