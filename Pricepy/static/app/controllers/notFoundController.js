app.controller('notFoundController', function notFoundController($scope, getData){
    //console.log("NotFound controller runs");

    getData.getContent("/api/Values", "notFound").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
        //console.log($scope.data);
    })
})