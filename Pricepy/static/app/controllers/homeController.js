app.controller('homeController', function homeController($scope, $location){
    console.log("home controller runs");
    $scope.$parent.path = "/";

    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        console.log("init map called");
    };

    initMap();
}
)