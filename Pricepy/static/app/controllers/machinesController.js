app.controller('machinesController', function machinesController($scope, getData){
    $scope.$parent.path = "/machines";

    if ($scope.$parent.machines){
        var data = $scope.$parent.machines;
        $scope.data = data;
        //reset visibility;
        $scope.data.gallery.items.map(function(a){
            a.isVisible = true;
        });
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
    }
    else{
        getData.getContent("/api/Values", "machines").then(function(data){
            $scope.$parent.machines = data;
            
            $scope.data = data;
            $scope.$parent.pageTitle = data.pageTitle;
            $scope.$parent.pageDescription = data.pageDescription;
        })
    }
})