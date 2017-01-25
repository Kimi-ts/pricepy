var adminApp = angular.module("adminApp", ["ngRoute", "ngSanitize"]);

adminApp.config(function ($routeProvider) {
    //TO DO
    //Do we really need Messages controller on Admin View?
    //We can send the messages immediately to email, not to any system on the Site
    $routeProvider
    .when("/", {
        templateUrl: "static/admin/templates/signin.htm",
        controller: "signinController"
    })
    .when("/gallery", {
        templateUrl: "static/admin/templates/gallery.htm",
        controller: "galleryController"
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