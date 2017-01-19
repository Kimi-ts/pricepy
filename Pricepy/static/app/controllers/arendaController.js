app.controller('arendaController', function arendaController($scope, $location){
    console.log("arenda controller runs");
    $scope.$parent.path = "/arenda";
    $scope.data = $scope.$parent.data.arenda;
    console.log($scope.data);
})