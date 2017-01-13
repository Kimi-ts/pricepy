app.controller('contactController', function contactController($scope){
    console.log("contact controller runs");
    $scope.$parent.path = "/contact";
}
)