adminApp.service("getData", function($http){
    var promise = $http({
         method: 'Get',
         url: '/api/adminValues',
    }).then(function successCallback(response) {
        return response.data;
    }, function errorCallback(response) {
        console.log("error");
    });

    return promise;
})