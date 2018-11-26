var app = angular.module("myApp", ["ngRoute", "ngSanitize", "ngCookies", "ngAnimate", "ngTouch", "ngYoutubeEmbed"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    var templateSourcePath = "static/src/app/templates/";
    $routeProvider
    .when("/", {
        templateUrl: templateSourcePath +"home.htm",
        controller: "homeController"
    })
    .when("/news", {
        templateUrl: templateSourcePath +"news.htm",
        controller: "newsController"
    })
    .when("/usefulText", {
        templateUrl: templateSourcePath +"usefulText.htm",
        controller: "usefulTextController"
    })
    .when("/usefulVideo", {
        templateUrl: templateSourcePath +"usefulVideo.htm",
        controller: "usefulVideoController"
    })
    .when("/machines/:machineId", {
        templateUrl: templateSourcePath + "machinePage.htm",
        controller: "machineController",
        machineId: "machineId"
    })
    .when("/machines", {
        templateUrl: templateSourcePath + "machines.htm",
        controller: "machinesController"
    })
    .when("/arenda", {
        templateUrl: templateSourcePath + "arenda.htm",
        controller: "arendaController"
    })
    .when("/contact", {
        templateUrl: templateSourcePath + "contact.htm",
        controller: "contactController"
    })
    .when("/notFound", {
        templateUrl: templateSourcePath + "notFound.htm",
        controller: "notFoundController"
    })
    .otherwise("/notFound", {
        templateUrl: templateSourcePath + "notFound.htm",
        controller: "notFoundController"
    })

    $locationProvider.html5Mode(true);
}]);

app.controller("appController", ["$scope", "$location", "$http", "getData", "dateService", function($scope, $location, $http, getData, dateService){
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
}])