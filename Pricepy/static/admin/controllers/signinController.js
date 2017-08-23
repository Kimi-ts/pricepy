adminApp.controller('signinController', ['$scope', '$http', '$location', '$cookies', 'getData', 'postData', 'myVars', function signinController($scope, $http, $location, $cookies, getData, postData, myVars){
    console.log("sign in controller runs");
    $scope.$parent.path = "/sign in";
    
    $scope.isError = false;

    getData.getContent("/api/Values", "signin").then(function(data){
        $scope.data = data;
        console.log($scope.data);

        $scope.submit = function(){
            if ($scope.messagesForm.$invalid){
                return;
            };

            postData.postContent('/api/AdminValues', $scope.form).then(function (response) {
                if (!response.isError && response.data){
                    $scope.isError = false;
                    myVars.tokenValue = response.data.Value;
                    $cookies.put('X-Token', myVars.tokenValue);
                    $location.path("/gallery")
                }
                else{
                    $scope.isError = true;
                    console.log("error occured on our server");
                    console.log(response);
                }
            });
        };
    })
}
]);