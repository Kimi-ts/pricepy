app.controller('calendarController', ["$scope", "calendarService", function calendarController($scope, calendarService){
    console.log("calendar controller runs");
    $scope.bookedDates = $scope.$parent.machine.bookedDates;

    var currDate = new Date();
    console.log(currDate);
    var currDateStrig = currDate.toDateString();
    var firstDayOfCurrMonth = calendarService.getFirstDayOfMonth(currDateStrig);
    console.log(firstDayOfCurrMonth)
    var numberOfDaysInCurrMonth = calendarService.getLastDayOfMonth(currDateStrig);

    $scope.arr= calendarService.getMonthArray(firstDayOfCurrMonth, numberOfDaysInCurrMonth);
}])