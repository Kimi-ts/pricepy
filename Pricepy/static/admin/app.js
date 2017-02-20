var adminApp = angular.module("adminApp", ["ngRoute", "ngSanitize", "ngCookies"]);

adminApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/admin/templates/signin.htm",
        controller: "signinController"
    })
    .when("/gallery", {
        templateUrl: "static/admin/templates/gallery.htm",
        controller: "galleryController"
    })
});

adminApp.controller("adminController", function ($scope, $location, $http, getData) {
    $scope.path = $location.path();
    console.log("hello from Admin");

    getData.getContent("/api/Values", "header").then(function(data){
        $scope.data = {};
        $scope.data.header = data;
        console.log($scope.data);
        getData.getContent("/api/Values", "footer").then(function(data){
            $scope.data.footer = data;
            console.log($scope.data);
        })
    });
})