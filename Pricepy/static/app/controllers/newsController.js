app.controller('newsController', function newsController($scope){
    console.log("news controller runs");
    $scope.$parent.path = "/news";
}
)