app.controller('arendaController', function arendaController($scope, $location, getData){
    $scope.$parent.path = "/arenda";

    getData.getContent("/api/Values", "arenda").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
    })
})