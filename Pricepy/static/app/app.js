var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/app/templates/main.htm"
    })
    .when("/red", {
        templateUrl: "static/app/templates/menu.htm"
    })
    .when("/green", {
        templateUrl: "static/app/templates/menu.htm"
    })
    .when("/blue", {
        templateUrl: "static/app/templates/main.htm"
    });
});