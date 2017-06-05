adminApp.controller('scrollToAnchorController', function($scope, anchorSmoothScroll) {
    $scope.gotoElement = function (eID){
      anchorSmoothScroll.scrollTo(eID);
    };
});