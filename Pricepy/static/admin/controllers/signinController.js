adminApp.controller('signinController', function signinController($scope, $http, getData){
    console.log("sign in controller runs");
    $scope.$parent.path = "/sign in";

    getData.then(function(data){
        $scope.data = data.signin;
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