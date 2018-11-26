app.controller('usefulTextController', ["$scope", "$location", "getData", "dateService", function usefulTextController($scope, $location, getData, dateService){
    $scope.$parent.path = "/usefulText";

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;

        $scope.textItems = $scope.data.sections.filter(function(item){
            return item.type == "Полезная информация" && item.tags.indexOf("Видео") == -1;
        });

        $scope.textItems.forEach(function(item){
            item.fullDate = dateService.getNiceDate(item.date).fullDate;
        });

        $scope.activeSection = $scope.textItems[0];

        $scope.viewSection = function(section){
            $scope.activeSection = section;
        }
    })
}])