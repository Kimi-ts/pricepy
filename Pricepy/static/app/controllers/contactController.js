app.controller('contactController', function contactController($scope){
    console.log("contact controller runs");
    $scope.$parent.path = "/contact";

    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        console.log("init map called");
    };

    initMap();
})