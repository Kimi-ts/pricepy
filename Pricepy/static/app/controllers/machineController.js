app.controller('machineController', function machineController($scope, $routeParams, getData){
    console.log("single machine controller runs");
    //to make section active in main menu
    $scope.$parent.path = "/machines";
    console.log($routeParams);

    $scope.index = $routeParams.machineId;

    getData.then(function(data){
        $scope.data = data.machine;
        $scope.machine = data.machines.gallery.items[$scope.index-1];
        console.log($scope.data);

        //first item active by default
        $scope.activeImg = $scope.machine.secondaryImages[0];
    });

    $scope.setActive = function(image){
        $scope.activeImg = image;
    }
})