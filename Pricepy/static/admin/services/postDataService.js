adminApp.service("postData", ['$http', '$cookies', 'myVars',function($http, $cookies, myVars){

    var setDefaultHeaders = function(headers){
        var tokenValue = myVars.tokenValue;
        if (!tokenValue){
            tokenValue = $cookies.get("X-Token");
        };

        if (headers){
            headers["X-Token"] = tokenValue;
        }
        else{
            headers = {"X-Token": tokenValue};
        };
        return headers;
    };

    return {
        postContent: function (url, dataToPost, headers) {
                var promise = $http({
                    method: 'POST',
                    url: url,
                    data: dataToPost,
                    headers: setDefaultHeaders(headers)
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(response) {
                    response.isError = true;
                    return response;
                });

                return promise;
            },

        postFile: function(url, fileToPost, headers){
                var fd = new FormData();
                fd.append('file', fileToPost);

                //set special header for transfering a file
                if (headers){
                    headers["Content-Type"] = undefined;
                }
                else{
                    headers = {"Content-Type": undefined};
                }

                var promise = $http({
                    method: 'POST',
                    url: url,
                    data: fd,
                    transformRequest: angular.identity,
                    headers: setDefaultHeaders(headers)
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(response) {
                    response.isError = true;
                    return response;
                });

                return promise;
            }
        }
    }
]);