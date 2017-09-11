app.controller('timerController',['$scope', "$interval", 'dateFilter', 'getData', function timerController($scope, $interval, dateFilter, getData){
    console.log("timer controlelr runs");
    console.log($scope.$parent);
    $scope.data = $scope.$parent.data;

    $scope.hoursFormat = "hh";
    $scope.minutesFormat = "mm";
    $scope.secondsFormat = "ss";
    // $scope.curentTime = "current time";
    // $scope.data.KimiStr = "Tanya Shvets";
    $scope.hoursLeft = "zero h";
    $scope.minutesLeft = "zero m";
    $scope.secondsLeft = "zero s";


    console.log("again scope:");
    console.log($scope);
    var start = new Date();
    console.log(start);
    var finishstr = $scope.data.action.finishDateTime;
    // var finish = new Date(finishstr);
    // var elapsedTicks = finish.getTime()-start.getTime();
    // var gap = new Date(elapsedTicks);
    // console.log("elapsed");
    // console.log(elapsedTicks);
    // console.log(gap);
    // console.log(gap.getHours());
    // console.log(gap.getDay());
    var timeInterval = $interval(function(){
        $scope.temp = "updated";
        console.log("<<inside time interval>>");
        var t = getTimeRemaining(finishstr);
        $scope.hoursLeft = t.hours;
        $scope.minutesLeft = t.minutes;
        $scope.secondsLeft = t.seconds;

        if (t.total <= 0){
            clearInterval(timeInterval);
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
}])