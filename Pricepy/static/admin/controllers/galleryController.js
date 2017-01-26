adminApp.controller('galleryController', function galleryController($scope, $location, getData){
    console.log("gallery controller runs");
    $scope.$parent.path = "/gallery";

    getData.getContent("/api/AdminValues", "machines").then(function(data){
        console.log("in gallery controller");
        console.log(data);
        if (data == null){
            $location.path("/");
        }
        else{
            $scope.data = data;
        }
    })
})