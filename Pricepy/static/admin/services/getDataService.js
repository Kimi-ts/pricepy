adminApp.service("getData", ['$http', '$cookies', 'myVars',function($http, $cookies, myVars){
    return {
            getContent: function (url, sectionName) {

            //console.log(TokenValue);
            var tokenValue = myVars.tokenValue;
            console.log("token value inside GETDATA service:");
            console.log(tokenValue);
            if (!tokenValue){
                tokenValue = $cookies.get("X-Token");
            }
            console.log("X-token");
            console.log(tokenValue);
            var promise = $http({
                method: 'Get',
                url: url,
                params: {
                    sectionName: sectionName
                },
                headers: {
                    "X-Token": tokenValue
                }
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