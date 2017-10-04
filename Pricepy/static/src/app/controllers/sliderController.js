app.controller('sliderController', ["$scope", "$location", "$interval", "getData", "dateService", function sliderController($scope, $location, $interval, getData, dateService){
    console.log("slider controller runs");
    $scope.banners = $scope.$parent.data.banners;
    $scope.activeIndex = 0;

    var timeInterval;

    var createSlider = function(){
        setActiveItem($scope.activeIndex);

        timeInterval = $interval(function(){
            console.log("time interval callded");
            $scope.activeIndex++;
            if ($scope.activeIndex >= $scope.banners.length){
                $scope.activeIndex = 0;
            }
            setActiveItem($scope.activeIndex);
        }, 8000);
        
    };

    var setActiveItem = function(index){
        for(var i = 0; i < $scope.banners.length; i++){
            $scope.banners[i].isActive = (index == i);
        }
    };

    if ($scope.banners){
        if ($scope.banners.length == 1){
            setActiveItem(0);
        }
        if ($scope.banners.length > 1){
            createSlider();
        }
    };

    $scope.$on("$destroy", function(){
        $interval.cancel(timeInterval);
    })
}])