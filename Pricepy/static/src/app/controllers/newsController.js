app.controller('newsController', ["$scope", "$location", "getData", "dateService", function newsController($scope, $location, getData, dateService){
    $scope.$parent.path = "/news";

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;

        $scope.newsTitleItems = $scope.data.sections.filter(function(item){
            return item.type == "Новости"
        });

        $scope.newsTitleItems.forEach(function(item){
            item.months = dateService.getNiceDate(item.date).months;
            item.day = dateService.getNiceDate(item.date).day;
            item.year = dateService.getNiceDate(item.date).year;
            item.fullDate = dateService.getNiceDate(item.date).fullDate;
        });
    })
}])