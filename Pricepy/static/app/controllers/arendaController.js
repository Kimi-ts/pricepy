app.controller('arendaController', function arendaController($scope, $location, getData){
    console.log("arenda controller runs");
    $scope.$parent.path = "/arenda";

    getData.then(function(data){
        $scope.data = data.arenda;
        console.log($scope.data);
    })
})