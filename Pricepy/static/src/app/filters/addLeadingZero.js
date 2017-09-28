app.filter('addLeadingZero', function () {
    return function(input) {
        if (input < 10){
            return "0" + input;
        }
        return input;
    };
});