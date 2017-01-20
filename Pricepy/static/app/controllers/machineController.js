app.controller('machineController', function machineController($scope, $routeParams){
    console.log("single machine controller runs");
    //to make section active in main menu
    $scope.$parent.path = "/machines";
    console.log($routeParams);

    this.index = $routeParams.machineId;
    $scope.data = $scope.$parent.data.machine;
    $scope.machine = $scope.$parent.data.machines.gallery.items[this.index-1];

    //first item active by default
    $scope.activeImg = $scope.machine.secondaryImages[0];

    $scope.setActive = function(image){
        $scope.activeImg = image;
    }
})