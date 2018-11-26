app.controller('usefulVideoController', ["$scope", "$location", "getData", "dateService", function usefulVideoController($scope, $location, getData, dateService){
    $scope.$parent.path = "/usefulVideo";

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;

        $scope.videoItems = $scope.data.sections.filter(function(item){
            return item.type == "Полезная информация" && item.tags.indexOf("Видео") != -1;
        });

        $scope.videoItems.forEach(function(item){
            item.fullDate = dateService.getNiceDate(item.date).fullDate;
        });

        $scope.activeSection = $scope.videoItems[0];

        $scope.viewSection = function(section){
            $scope.activeSection = section;
        }
    })
}])