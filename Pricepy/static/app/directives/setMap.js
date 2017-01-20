app.directive("setMap", function($timeout){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            var map;
            function initMap() {
                var myLatLng = {lat: 53.7782142, lng: 27.5949404};

                var map = new google.maps.Map(element[0], {
                    zoom: 10,
                    center: myLatLng
                });

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                });
            };

            $timeout(function(){
                initMap();
            }, 500)
        }
    }
});