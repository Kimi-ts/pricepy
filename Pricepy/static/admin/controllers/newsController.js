adminApp.controller('newsController', [ '$scope', '$location', '$http', 'getData', 'myVars', function newsController($scope, $location, $http, getData, myVars){
        console.log("news controller runs");
        $scope.$parent.path = "/news";

        $scope.isDataUpdated = false;
        getData.getContent("/api/Values", "home").then(function(data){
            console.log(data);
            $scope.data = data;
        });
    }
])