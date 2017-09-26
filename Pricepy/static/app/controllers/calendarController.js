app.controller('calendarController', ["$scope", "calendarService", function calendarController($scope, calendarService){
    console.log("calendar controller runs");
    $scope.bookedDates = $scope.$parent.machine.bookedDates;

    var fillCalendar = function(originalDate){
        var currDate = originalDate;
        console.log(currDate);
        var currDateStrig = currDate.toDateString();
        var firstDayOfCurrMonth = calendarService.getFirstDayOfMonth(currDateStrig);
        var numberOfDaysInCurrMonth = calendarService.getLastDayOfMonth(currDateStrig);
            
        $scope.arr= calendarService.getMonthArray(firstDayOfCurrMonth, numberOfDaysInCurrMonth);
    };

    var today = new Date();
    $scope.monthTitle = calendarService.getMonthAndYearStr(today.toDateString());
    fillCalendar(today);

    $scope.nextMonth = function(){
        today = calendarService.increaseMonth(today);
        $scope.monthTitle = calendarService.getMonthAndYearStr(today.toDateString());
        fillCalendar(today);
    }

    $scope.prevMonth = function(){
        today = calendarService.decreaseMonth(today);
        $scope.monthTitle = calendarService.getMonthAndYearStr(today.toDateString());
        fillCalendar(today);
    }

}])