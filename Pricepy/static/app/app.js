var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/app/templates/home.htm",
        controller: "homeController"
    })
    .when("/news", {
        templateUrl: "static/app/templates/news.htm",
        controller: "newsController"
    })
    .when("/machines", {
        templateUrl: "static/app/templates/machines.htm",
        controller: "machinesController"
    })
    .when("/contact", {
        templateUrl: "static/app/templates/contact.htm",
        controller: "contactController"
    });
});

app.controller("appController", function($scope, $location){
    $scope.path = $location.path();
})