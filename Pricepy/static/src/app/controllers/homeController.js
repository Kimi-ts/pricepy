app.controller('homeController', ["$scope", "$location", "getData", "dateService", function homeController($scope, $location, getData, dateService){
    console.log("home controller runs");
    $scope.$parent.path = "/";
    $scope.showSlides = false;

    getData.getContent("/api/Values", "home").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
        $scope.showSlides = true;
        $scope.newsTitleItem = $scope.data.sections.filter(function(item){
            return item.type == "Новости"
        })[0];
        $scope.newsTitleItem.months = dateService.getNiceDate($scope.newsTitleItem.date).months;
        $scope.newsTitleItem.day = dateService.getNiceDate($scope.newsTitleItem.date).day;
        $scope.newsTitleItem.year = dateService.getNiceDate($scope.newsTitleItem.date).year;

        $scope.textItem = $scope.data.sections.filter(function(item){
            return item.type == "Полезная информация" && item.tags.indexOf("Видео") == -1;
        })[0];
        $scope.textItem.textHtml = $scope.textItem.textHtml.match("<p>(.*?)</p>")[0];
        $scope.textItem.months = dateService.getNiceDate($scope.textItem.date).months;
        $scope.textItem.day = dateService.getNiceDate($scope.textItem.date).day;
        $scope.textItem.year = dateService.getNiceDate($scope.textItem.date).year;

        $scope.videoItem = $scope.data.sections.filter(function(item){
            return item.type == "Полезная информация" && item.tags.indexOf("Видео") != -1;
        })[0];
        $scope.videoItem.textHtml = $scope.videoItem.textHtml.match("<p>(.*?)</p>")[0];
        $scope.videoItem.months = dateService.getNiceDate($scope.videoItem.date).months;
        $scope.videoItem.day = dateService.getNiceDate($scope.videoItem.date).day;
        $scope.videoItem.year = dateService.getNiceDate($scope.videoItem.date).year;
    })
}])