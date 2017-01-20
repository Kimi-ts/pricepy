app.service("getData", function($http){
    var promise = $http({
         method: 'Get',
         url: '/api/values',
    }).then(function successCallback(response) {
        // $scope1.data = response.data;
        // console.log($scope.data);
        return response.data;
    }, function errorCallback(response) {
        console.log("error");
    });

    return promise;
})