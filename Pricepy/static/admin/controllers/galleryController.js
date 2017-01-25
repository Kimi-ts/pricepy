adminApp.controller('galleryController', function galleryController($scope, $location, getData){
    console.log("gallery controller runs");
    $scope.$parent.path = "/gallery";

    getData.getContent().then(function(data){

        console.log(data);
        $scope.data = data.gallery;
        console.log($scope.data);
    })
})