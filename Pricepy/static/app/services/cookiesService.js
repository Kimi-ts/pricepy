app.service('cookiesService', ['$cookies', function($cookies){
    return {
        saveObject: function(key, value){
            var today = new Date();
            today.setHours(today.getHours() + 1);

            $cookies.put(key, JSON.stringify(value), {expires: today});
        },

        getObject: function(key, defaultValue){
            var cookieValue = $cookies.get(key);
            if (cookieValue){
                return JSON.parse(cookieValue);
            }
            else{
                return defaultValue;
            }
        }
    }
}
])