app.service('calendarService', function(){
    var emptyPlaceholder = "";
    var locale = "ru-ru";
    var options = {month: "long", year: "numeric"};

    return {
        getFirstDayOfMonth: function(dateStr){
            var dd = new Date(dateStr);
            dd.setDate(1);
            var weekDay = dd.getDay();
            //0 is for Sunday
            if (weekDay == 0){
                return 7;
            }
            return dd.getDay()
        },

        getLastDayOfMonth: function(dateStr){
            var dd = new Date(dateStr);

            //0 as day means previous month last day
            var cc = new Date(dd.getFullYear(), dd.getMonth()+1, 0);
            return cc.getDate();
        },

        isDatePast: function(originalDateStr, secondDateStr){
            var d1 = new Date(originalDateStr);
            d1.setHours(0,0,0,0);
            var d2 = new Date(secondDateStr);

            return d2 < d1;
        },

        getMonthAndYearStr: function(dateStr){
            var d = new Date(dateStr);
            return d.toLocaleDateString(locale, options);
        },

        increaseMonth: function(date){
            var month = date.getMonth();
            if (month == 11){
                date.setFullYear(date.getFullYear()+1);
                date.setMonth(0);
            }
            else{
                date.setMonth(date.getMonth()+1);
            }
            return date;
        },

        decreaseMonth: function(date){
            var month = date.getMonth();
            if (month == 0){
                date.setFullYear(date.getFullYear()-1);
                date.setMonth(11);
            }
            else{
                date.setMonth(date.getMonth()-1);
            }
            return date;
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
                            arr[rowNumber][colNumber] = {value: emptyPlaceholder};
                        }
                        else{
                            if (index > numberofDaysInMonths){
                                arr[rowNumber][colNumber] = {value:emptyPlaceholder};
                                exitRows = true;
                            }
                            else{
                                arr[rowNumber][colNumber] = {value: index};
                                index++;
                            }
                        }
                    }
                }
            };
            return arr;
        }
    }
});