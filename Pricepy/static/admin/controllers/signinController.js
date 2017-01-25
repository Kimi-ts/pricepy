adminApp.controller('signinController', function signinController($scope, $http, getData){
    console.log("sign in controller runs");
    $scope.$parent.path = "/sign in";
    
    $scope.isError = false;

    getData.then(function(data){
        $scope.data = data.signin;
        console.log($scope.data);

        $scope.submit = function(){
            if ($scope.messagesForm.$invalid){
                return;
            }
            $http({
                method: 'POST',
                url: '/api/AdminValues',
                data: $scope.form,
            }).then(function successCallback(response) {
                console.log(response);
                if (response.data){
                    //$scope.isSucceeded = true;
                    console.log("true")
                }
                else{
                    $scope.isError = true;
                }
            }, function errorCallback(response) {
                //$scope.isError = true;
                console.log("error occured on our server");
                console.log(response);
            });
        };
    })
})