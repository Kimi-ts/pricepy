app.directive("setMap", function($timeout){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            var map;
            function initMap() {
                map = new google.maps.Map(element[0], {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8
                });
                console.log("init map called");
            };

            $timeout(function(){
                initMap();
            }, 500)
        }
    }
});