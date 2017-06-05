adminApp.controller('newsController', [ '$scope', '$location', '$http', 'getData', 'myVars', function newsController($scope, $location, $http, getData, myVars){
        console.log("news controller runs");
        $scope.$parent.path = "/news";
        $scope.isDataUpdated = false;

        getData.getContent("/api/Values", "home").then(function(data){
            console.log(data);
            $scope.data = data;
        });

        $scope.postToServer = function(){
            if ($scope.newsForm.$invalid || $scope.newsForm.$pristine){
                    return;
            };

            var tokenValue = myVars.tokenValue;
            //NOTE: use two stringify methods to wrap object first into "" and second '' 
            //to be accepted by [post] method in Web Api
            var dataToSend = JSON.stringify(JSON.stringify($scope.data.sections));

            $http({
                method: 'POST',
                url: '/api/News',
                data: dataToSend,
                contentType: 'application/x-www-form-urlencoded',
                headers: {
                    "X-Token": tokenValue
                }
            }).then(function successCallback(response) {
                if (response.data){
                    $scope.isDataUpdated = true;
                    $scope.isError = false;
                }
                else{
                    $scope.isError = true;
                }
            });
        }
    }
])