app.directive("setMap", ["$timeout", function($timeout){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            var map;
            function initMap() {
                //old address
                //var myLatLng = {lat: 53.7782142, lng: 27.5949404};

                //new address Minsk Vulica Karzhaneyewskaha 16b
                var myLatLng = {lat: 53.841885, lng: 27.524684};

                var map = new google.maps.Map(element[0], {
                    zoom: 14,
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
}]);