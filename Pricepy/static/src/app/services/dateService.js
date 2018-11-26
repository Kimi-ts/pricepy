app.service('dateService', function () {
    var locale = "ru-be";
    
    return {
        isExpired: function (stringDateToCompare) {
            if (stringDateToCompare) {
                var now = new Date();
                var date = new Date(stringDateToCompare);
                return now > date;
            }
            return null;
        },

        getNiceDate: function (stringDate) {
            var date = new Date(stringDate);

            return {
                months: date.toLocaleString(locale, { month: "long" }),
                day: date.getDate(),
                year: date.getFullYear(),
                fullDate: date.toLocaleDateString(locale, { month: "long", year: "numeric", day: "numeric"})
            }
        },
    }
});