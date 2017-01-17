app.controller('machineController', function machineController($scope, $routeParams){
    console.log("single machine controller runs");
    //to make section active in main menu
    $scope.$parent.path = "/machines";
    console.log($routeParams);
}
)