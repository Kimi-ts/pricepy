app.controller('machinesController', function machinesController($scope, getData){
    console.log("machines controller runs");
    $scope.$parent.path = "/machines";

    if ($scope.$parent.machines){
        console.log("not null");
        var data = $scope.$parent.machines;
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
    }
    else{
        console.log("null, get new");
        getData.getContent("/api/Values", "machines").then(function(data){
            $scope.$parent.machines = data;
            
            $scope.data = data;
            $scope.$parent.pageTitle = data.pageTitle;
            $scope.$parent.pageDescription = data.pageDescription;
        })
    }
})