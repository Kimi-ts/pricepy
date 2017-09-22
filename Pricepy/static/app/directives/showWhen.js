app.directive('showWhen', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {

            $scope.checkExpose = function () {
                var mq = $attr.showWhen == 'large' ? '(min-width:768px)' : $attr.showWhen;
                if ($window.matchMedia(mq).matches) {
                    $element.removeClass('ng-hide');
                } else {
                    console.log("add");
                    $element.addClass('ng-hide');
                }
            };

            $scope.checkExpose();

            angular.element($window).bind('resize', function () {
                $scope.checkExpose();
            })

        }
    };
}]);