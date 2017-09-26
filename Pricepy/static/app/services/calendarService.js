app.service('calendarService', function(){
    var emptyPlaceholder = "";
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
            return cc.getDate();
        },

        getMonthArray: function(firstDayOfMonth, numberofDaysInMonths){
            var index = 1;
            var exitRows = false;
            var arr = [];
            for (var rowNumber = 0; rowNumber <= 5; rowNumber++){
                if (!exitRows && index <= numberofDaysInMonths){
                    arr.push([]);
                    for (var colNumber = 0; colNumber <= 6; colNumber++){
                        if (rowNumber == 0 && colNumber+ 1 < firstDayOfMonth){
                            arr[rowNumber][colNumber] = emptyPlaceholder;
                        }
                        else{
                            if (index > numberofDaysInMonths){
                                arr[rowNumber][colNumber] = emptyPlaceholder;
                                exitRows = true;
                            }
                            else{
                                arr[rowNumber][colNumber] = index;
                                index++;
                            }
                        }
                    }
                }
            };
            console.log(arr);
            return arr;
        }
    }
});