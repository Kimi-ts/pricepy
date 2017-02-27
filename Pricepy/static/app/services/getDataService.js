app.service("getData", ['$http',function($http){
    return {
            getContent: function (url, sectionName) {
                var promise = $http({
                    method: 'Get',
                    //url: '/api/adminValues',
                    url: url,
                    params: {sectionName: sectionName}, 
                }).then(function successCallback(response) {
                    return response.data;
                }, function errorCallback(response) {
                    console.log("error");
                });

                return promise;
            }
        }
    }
]);