adminApp.controller('addNewsController', [ '$scope', '$location', 'getData', 'postData', function newsController($scope, $location, getData, postData){
        console.log("add news controller runs");
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

            //NOTE: use two stringify methods to wrap object first into "" and second '' 
            //to be accepted by [post] method in Web Api
            var dataToSend = JSON.stringify(JSON.stringify($scope.data.sections));

            //postData.postContent('/api/News', dataToSend, {"Content-Type": 'application/x-www-form-urlencoded'}).then(function(response) {
            postData.postContent('/api/News', dataToSend).then(function(response) {
                if (!response.isError && response.data){
                    $scope.isDataUpdated = true;
                    $scope.isError = false;
                }
                else{
                    $scope.isError = true;
                }
            });
        };

        $scope.postImage = function(){
            if ($scope.myFile){
                postData.postFile('/api/Image', $scope.myFile).then(function(response) {
                    if (!response.isError && response.data){
                        console.log(response.data);
                    }
                    else{
                        console.log(response);
                    }
                });
            }
        };
    }
])