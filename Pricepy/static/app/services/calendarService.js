app.service('calendarService', function(){
    return {
        getFirstDayOfMonth: function(dateStr){
            var dd = new Date(dateStr);
            dd.setDate(1);
            return dd.getDay();
        },

        getLastDayOfMonth: function(dateStr){
            var dd = new Date(dateStr);

            //0 as day means previous month last day
            var cc = new Date(dd.getFullYear(), dd.getMonth()+1, 0);
            return cc.getDay();
        }
    }
});