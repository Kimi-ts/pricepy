app.controller('machinesController', function machinesController($scope, getData){
    console.log("machines controller runs");
    $scope.$parent.path = "/machines";

    getData.getContent("/api/Values", "machines").then(function(data){
        $scope.data = data;
        console.log($scope.data);
    })
})