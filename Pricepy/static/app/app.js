var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/app/templates/home.htm",
        controller: "homeController"
    })
    .when("/news", {
        templateUrl: "static/app/templates/news.htm",
        controller: "newsController"
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
});

app.controller("appController", function($scope, $location, $http){
    $scope.path = $location.path();

    $http({
         method: 'Get',
         url: '/api/values',
    }).then(function successCallback(response) {
        $scope.data = response.data;
        console.log($scope.data);
    }, function errorCallback(response) {
        console.log("error");
    });
})