adminApp.service('dateService', function(){
        return {
            isExpired: function(stringDateToCompare){
                if (stringDateToCompare){
                    var now = new Date();
                    var date = new Date(stringDateToCompare);
                    return now > date;
                }
                return null;
            }
    }
});