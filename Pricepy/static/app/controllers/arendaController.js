app.controller('arendaController', function arendaController($scope, $location, getData){
    console.log("arenda controller runs");
    $scope.$parent.path = "/arenda";

    getData.getContent("/api/Values", "arenda").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        console.log($scope.data);
    })
})