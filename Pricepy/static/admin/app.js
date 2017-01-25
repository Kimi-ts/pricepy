var adminApp = angular.module("adminApp", ["ngRoute", "ngSanitize"]);

adminApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "static/admin/templates/signin.htm",
        controller: "signinController"
    })
    // .when("/machines/:machineId", {
    //     templateUrl: "static/app/templates/machine.htm",
    //     controller: "machineController",
    //     machineId: "machineId"
    // })
    // .when("/machines", {
    //     templateUrl: "static/app/templates/machines.htm",
    //     controller: "machinesController"
    // })
    // .when("/arenda", {
    //     templateUrl: "static/app/templates/arenda.htm",
    //     controller: "arendaController"
    // })
    // .when("/contact", {
    //     templateUrl: "static/app/templates/contact.htm",
    //     controller: "contactController"
    // });
});

adminApp.controller("adminController", function ($scope, $location, $http, getData) {
    $scope.path = $location.path();
    console.log("hello");

    getData.getContent().then(function (data) {
        $scope.data = data;
        console.log($scope.data);
    })
})