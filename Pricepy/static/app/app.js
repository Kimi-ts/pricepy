var app = angular.module("myApp", ["ngRoute", "ngSanitize", "ngAnimate", "ngTouch"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/app/templates/home.htm",
        controller: "homeController"
    })
    .when("/machines/:machineId", {
        templateUrl: "static/app/templates/machinePage.htm",
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
    })
    .when("/notFound", {
        templateUrl: "static/app/templates/notFound.htm",
        controller: "notFoundController"
    })
    .otherwise("/notFound", {
        templateUrl: "static/app/templates/notFound.htm",
        controller: "notFoundController"
    })

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
        });

        if ($scope.machines != null){
            //async get data for machines
            getData.getContent("/api/Values", "machines").then(function(data){
                console.log("[asynk] app machines loaded!");
                $scope.machines = data;
                console.log("machines in app:");
                console.log($scope.data);
            });
        }
    })
})