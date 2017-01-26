// app.service("getData", function($http){
//     var promise = $http({
//          method: 'Get',
//          url: '/api/values',
//     }).then(function successCallback(response) {
//         // $scope1.data = response.data;
//         // console.log($scope.data);
//         return response.data;
//     }, function errorCallback(response) {
//         console.log("error");
//     });

//     return promise;
// })

app.service("getData", ['$http',function($http){
        // var promise = $http({
        //      method: 'Get',
        //      url: '/api/adminValues',
        // }).then(function successCallback(response) {
        //     return response.data;
        // }, function errorCallback(response) {
        //     console.log("error");
        // });

    return {
            getContent: function (url, sectionName) {

            // //console.log(TokenValue);
            // var tokenValue = myVars.tokenValue;
            // console.log("token value inside GETDATA service:");
            // console.log(tokenValue);
            
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