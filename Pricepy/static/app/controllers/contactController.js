app.controller('contactController', function contactController($scope, $http, getData){
    console.log("contact controller runs");
    $scope.$parent.path = "/contact";

    getData.getContent("/api/Values", "contacts").then(function(data){
        $scope.data = data;
        $scope.$parent.pageTitle = data.pageTitle;
        console.log($scope.data);

        $scope.isSucceeded = false;
        $scope.isError = false;
        $scope.submit = function(){
            if ($scope.messagesForm.$invalid){
                return;
            }
            $http({
                method: 'POST',
                url: '/api/Messages',
                data: $scope.form,
            }).then(function successCallback(response) {
                console.log(response);
                if (response.data){
                    $scope.isSucceeded = true;
                }
                else{
                    $scope.isError = true;
                }
            }, function errorCallback(response) {
                $scope.isError = true;
            });
        };
    })
})