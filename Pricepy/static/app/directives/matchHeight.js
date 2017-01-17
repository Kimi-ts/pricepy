app.directive("matchHeight", function($timeout, $window){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            scope.onresize = function(){
                $timeout(function(){
                    var images = element[0].getElementsByClassName('item-img');
                    var max = 1000;
                    for(var i = 0; i< images.length; i++){
                        images[i].style.height = 'auto';
                    };
                    for(var i = 0; i< images.length; i++){
                        var height = images[i].height;
                        if (height < max){
                            max = height;
                        };
                    };
                    for(var i = 0; i< images.length; i++){
                        images[i].style.height = max + "px";
                    };
                }, 1000);
            };
            scope.onresize();
            angular.element($window).bind('resize', function() {
                scope.onresize();
            })
        }
    }
})