app.directive("matchHeight", ["$timeout", "$window", function($timeout, $window){
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            scope.matchHeight = function(){
                $timeout(function(){
                    var images = element[0].getElementsByClassName('item-img');
                    if (attrs.matchHeight == "toLarger"){
                        var max = 1;
                        for(var i = 0; i< images.length; i++){
                            images[i].style.height = 'auto';
                            var height = images[i].height;

                            //if height property not defined
                            if (height == undefined){
                                height = images[i].clientHeight;
                            }
                            //if img hasn't been loaded yet
                            if (height == 0){
                                height = 200;
                            }
                            if (height > max){
                                max = height;
                            };
                        };
                    }
                    else{
                        //to smallest
                        var max = 1000;
                        for(var i = 0; i< images.length; i++){
                            images[i].style.height = 'auto';
                            var height = images[i].height;

                            //if height property not defined
                            if (height == undefined){
                                height = images[i].clientHeight;
                            }
                            //if img hasn't been loaded yet
                            if (height == 0){
                                height = 200;
                            }
                            if (height < max){
                                max = height;
                            };
                        };
                    }
                    for(var i = 0; i< images.length; i++){
                        images[i].style.height = max + "px";
                    };
                },900);
            };
            scope.matchHeight();
            angular.element($window).bind('resize', function() {
                scope.matchHeight();
            })
        }
    }
}]);