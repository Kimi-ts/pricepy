adminApp.controller('actionsController', ['$scope', '$http', '$location', '$cookies', '$timeout', 'getData', 'postData', 'myVars', function actionsController($scope, $http, $location, $cookies, $timeout, getData, postData, myVars){
    console.log("actions controller runs");
    $scope.$parent.path = "/actions";
    $scope.isDataUpdated = false;

    getData.getContent("/api/Values", "home").then(function(data){
        console.log(data);
        $scope.data = data;
    });

    $scope.postToServer = function(){
        if ($scope.bannersForm.$invalid || $scope.bannersForm.$pristine){
                return;
        };

        $scope.isHiglightFirstNewsItem = false;
        $scope.isDataUpdated = false;
        $scope.isError = false;

        //NOTE: use two stringify methods to wrap object first into "" and second '' 
        //to be accepted by [post] method in Web Api
        var dataToSend = JSON.stringify(JSON.stringify($scope.data.banners));

        postData.postContent('/api/Banners', dataToSend).then(function(response) {
            if (!response.isError && response.data){
                toggleVariableBlinking("isDataUpdated");
                $scope.isError = false;
            }
            else{
                toggleVariableBlinking("isError");
            }
        });
    };

    $scope.removeItem = function(indexToRemove){
        $scope.data.banners.splice(indexToRemove, 1);
        $scope.bannersForm.$setDirty();
    }

    var toggleVariableBlinking = function(variableName){
        $scope[variableName] = true;
        $timeout(function(){
            $scope[variableName] = false;
        }, 4000)
    }
}]);