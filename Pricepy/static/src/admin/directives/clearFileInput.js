adminApp.directive('clearFileInput', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on("submit", function(){
                var fileInput = document.getElementsByName(attrs.clearFileInput)[0];
                angular.element(fileInput).val(null);
                angular.element(fileInput).triggerHandler('change');

                return false;
            })
        }
    };
});