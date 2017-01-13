var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/app/templates/main.htm"
    })
    .when("/news", {
        templateUrl: "static/app/templates/news.htm"
    })
    .when("/machines", {
        templateUrl: "static/app/templates/machines.htm"
    })
    .when("/contact", {
        templateUrl: "static/app/templates/contact.htm"
    });
});