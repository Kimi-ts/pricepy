app.controller('machinesController', function machinesController($scope, getData){
    console.log("machines controller runs");
    $scope.$parent.path = "/machines";

    getData.then(function(data){
        $scope.data = data.machines;
        console.log($scope.data);
    })
})