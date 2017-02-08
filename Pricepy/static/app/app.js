var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/app/templates/home.htm",
        controller: "homeController"
    })
    .when("/machines/:machineId", {
        templateUrl: "static/app/templates/machine.htm",
        controller: "machineController",
        machineId: "machineId"
    })
    .when("/machines", {
        templateUrl: "static/app/templates/machines.htm",
        controller: "machinesController"
    })
    .when("/arenda", {
        templateUrl: "static/app/templates/arenda.htm",
        controller: "arendaController"
    })
    .when("/contact", {
        templateUrl: "static/app/templates/contact.htm",
        controller: "contactController"
    });

    $locationProvider.html5Mode(true);
});

app.controller("appController", function($scope, $location, $http, getData){
    $scope.path = $location.path();

    getData.getContent("/api/Values", "header").then(function(data){
        $scope.data = {};
        $scope.data.header = data;
        console.log($scope.data);
        getData.getContent("/api/Values", "footer").then(function(data){
            $scope.data.footer = data;
            console.log($scope.data);
        })
    })
})