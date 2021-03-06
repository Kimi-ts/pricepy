app.controller('timerController',['$scope', "$interval", "dateService", function timerController($scope, $interval, dateService){
    console.log("timer controlelr runs");
    var emptyPlaceholder = "";

    $scope.daysLeft = emptyPlaceholder;
    $scope.hoursLeft = emptyPlaceholder;
    $scope.minutesLeft = emptyPlaceholder;
    $scope.secondsLeft = emptyPlaceholder;

    $scope.isLoaded = false;
    
    var finishstr = $scope.$parent.banner.finishDateTime;
    var timeInterval = $interval(function(){
        console.log("<<inside time interval>>");
        var t = getTimeRemaining(finishstr);
        $scope.hoursLeft = t.hours;
        $scope.minutesLeft = t.minutes;
        $scope.secondsLeft = t.seconds;
        $scope.daysLeft = t.days;
        $scope.isLoaded = true;

        if (t.total <= 0){
            $interval.cancel(timeInterval);
        }
    }, 1000);

    var getTimeRemaining = function (endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

    $scope.isActionFinished = !dateService.isExpired(finishstr);

    $scope.$on('$destroy', function() {
        $interval.cancel(timeInterval);
    });
}])