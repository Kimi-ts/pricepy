app.controller('scrollToAnchorController', function($scope, $location, anchorSmoothScroll) {
    $scope.gotoElement = function (eID){
      anchorSmoothScroll.scrollTo(eID);
    };
});