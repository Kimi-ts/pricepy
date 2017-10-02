app.controller('sliderController', ["$scope", "$location", "$interval", "getData", "dateService", function sliderController($scope, $location, $interval, getData, dateService){
    console.log("slider controller runs");
    $scope.banners = $scope.$parent.data.banners;
    $scope.activeIndex = 0;

    var createSlider = function(){
        setActiveItem($scope.activeIndex);

        $interval(function(){
            $scope.activeIndex++;
            if ($scope.activeIndex >= $scope.banners.length){
                $scope.activeIndex = 0;
            }
            setActiveItem($scope.activeIndex);
        }, 10000)
    };

    var setActiveItem = function(index){
        for(var i = 0; i < $scope.banners.length; i++){
            $scope.banners[i].isActive = (index == i);
        }
    };

    if ($scope.banners.length > 1){
        createSlider();
    };
}])