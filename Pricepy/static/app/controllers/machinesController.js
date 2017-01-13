app.controller('machinesController', function machinesController($scope){
    console.log("machines controller runs");
    $scope.$parent.path = "/machines";
}
)