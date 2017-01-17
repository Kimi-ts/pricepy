app.controller('machineController', function machineController($scope, $routeParams){
    console.log("single machine controller runs");
    //to make section active in main menu
    $scope.$parent.path = "/machines";
    console.log($routeParams);

    // TO DO
    // create mechanism to use first item src by default
    $scope.activeSrc = "static/content/2.jpg";

    // TO DO
    // retrieve images from backend 

    $scope.secondaryImages = [ "static/content/1.jpg", "static/content/2.jpg", "static/content/3.jpeg"];

    $scope.setActive = function(activeSrc){
        $scope.activeSrc = activeSrc;
    }
})