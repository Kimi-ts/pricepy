app.controller('calendarController', ["$scope", "calendarService", function calendarController($scope, calendarService){
    console.log("calendar controller runs");
    $scope.bookedDates = $scope.$parent.machine.bookedDates;
    if ($scope.bookedDates){
        $scope.bookedDates = $scope.bookedDates.split(",");
    }
    console.log($scope.bookedDates);

    var fillCalendar = function(originalDate){
        var currDate = originalDate;
        console.log(currDate);
        var currDateStrig = currDate.toDateString();
        var firstDayOfCurrMonth = calendarService.getFirstDayOfMonth(currDateStrig);
        var numberOfDaysInCurrMonth = calendarService.getLastDayOfMonth(currDateStrig);
            
        $scope.arr= calendarService.getMonthArray(firstDayOfCurrMonth, numberOfDaysInCurrMonth);
    };

    var highlightDay = function(dateStr, propeptyName){
        var dd = new Date(dateStr);
        var day = dd.getDate();
        for(var rowIndex=0; rowIndex<$scope.arr.length; rowIndex++){
            for(var colIndex = 0; colIndex < $scope.arr[rowIndex].length; colIndex++){
                if ($scope.arr[rowIndex][colIndex].value == day){
                    $scope.arr[rowIndex][colIndex][propeptyName] = true;
                    break;
                }
            }
        }
        console.log($scope.arr);
    };

    var markBookedDates = function(){
        for(var i = 0; i< $scope.bookedDates.length; i++){
            var dd = new Date($scope.bookedDates[i]);
            if (dd.getMonth() == currentDay.getMonth() && dd.getFullYear() == currentDay.getFullYear()){
                //mark only if not expired
                if (!calendarService.isDatePast(today.toDateString(), $scope.bookedDates[i])){
                    highlightDay($scope.bookedDates[i], "booked");
                }
            }
        };
    };

    var today = new Date();
    var currentDay = new Date();
    $scope.monthTitle = calendarService.getMonthAndYearStr(currentDay.toDateString());
    fillCalendar(currentDay);
    highlightDay(today.toDateString(), "today");
    markBookedDates();

    $scope.nextMonth = function(){
        currentDay = calendarService.increaseMonth(currentDay);
        $scope.monthTitle = calendarService.getMonthAndYearStr(currentDay.toDateString());
        fillCalendar(currentDay);
        if (today.getMonth() == currentDay.getMonth() && today.getFullYear() == currentDay.getFullYear()){
            highlightDay(today.toDateString(), "today");
        };
        markBookedDates();
    };

    $scope.prevMonth = function(){
        currentDay = calendarService.decreaseMonth(currentDay);
        $scope.monthTitle = calendarService.getMonthAndYearStr(currentDay.toDateString());
        fillCalendar(currentDay);
        if (today.getMonth() == currentDay.getMonth() && today.getFullYear() == currentDay.getFullYear()){
            highlightDay(today.toDateString(), "today");
        };
        markBookedDates();
    };
}])