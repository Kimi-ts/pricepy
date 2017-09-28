adminApp.controller('newsController', [ '$scope', '$location', 'getData', 'postData', '$timeout', function newsController($scope, $location, getData, postData, $timeout){
        console.log("news controller runs");
        $scope.$parent.path = "/news";
        $scope.isDataUpdated = false;
        $scope.videoUrl = "";
        $scope.isShowInstructions = false;

        getData.getContent("/api/Values", "home").then(function(data){
            console.log(data);
            $scope.data = data;
        });

        $scope.postToServer = function(){
            if ($scope.newsForm.$invalid || $scope.newsForm.$pristine){
                    return;
            };

            $scope.isHiglightFirstNewsItem = false;
            $scope.isDataUpdated = false;
            $scope.isError = false;
            $scope.isImageUploadError = false;

            //NOTE: use two stringify methods to wrap object first into "" and second '' 
            //to be accepted by [post] method in Web Api
            var dataToSend = JSON.stringify(JSON.stringify($scope.data.sections));

            //postData.postContent('/api/News', dataToSend, {"Content-Type": 'application/x-www-form-urlencoded'}).then(function(response) {
            postData.postContent('/api/News', dataToSend).then(function(response) {
                if (!response.isError && response.data){
                    toggleVariableBlinking("isDataUpdated");
                    $scope.isError = false;
                }
                else{
                    toggleVariableBlinking("isError");
                }
            });
        };

        $scope.postImage = function(){
            if ($scope.imageForm.$invalid || $scope.imageForm.$pristine && $scope.myFile){
                postData.postFile('/api/Image', $scope.myFile).then(function(response) {
                    if (!response.isError && response.data){
                        if (response.data.Message){
                            $scope.isImageUploadError = false;
                            var newSection = {};
                            newSection.img = {};
                            newSection.img.imgSrc = response.data.Message;
                            newSection.textHtml = "<h3 class='textBlock-subheadline'>Заголовок новости</h3><p>Текст новости</p><p class='textBlock-text--italic'>Big Trailler - самые надёжные прицепы твоего города!</p>";

                            //push the new one at the beginning of the list
                            $scope.data.sections.splice(0, 0, newSection);
                            $scope.isHiglightFirstNewsItem = true;
                        }
                    }
                    else{
                        toggleVariableBlinking("isImageUploadError");
                        console.log(response);
                    }
                });
            }
        };

        $scope.postVideo = function()
        {
            if ($scope.videoUrl){
                var newSection = {};
                newSection.video = {};
                newSection.video.url = $scope.videoUrl; 
                newSection.textHtml = "<h3 class='textBlock-subheadline'>Заголовок новости</h3><p>Текст новости</p><p class='textBlock-text--italic'>Big Trailler - самые надёжные прицепы твоего города!</p>";

                //push the new one at the beginning of the list
                $scope.data.sections.splice(0, 0, newSection);
                $scope.isHiglightFirstNewsItem = true;
                $scope.videoUrl = "";
            }
        }

        $scope.removeItem = function(indexToRemove){
            $scope.data.sections.splice(indexToRemove, 1);
            $scope.newsForm.$setDirty();
        }

        $scope.toggleInstructionVisibility = function(){
            $scope.isShowInstructions = !$scope.isShowInstructions;
        }

        var toggleVariableBlinking = function(variableName){
            $scope[variableName] = true;
            $timeout(function(){
                $scope[variableName] = false;
            }, 4000)
        }
    }
])