app.controller('scrollToAnchorController', ["$scope", "anchorSmoothScroll", function($scope, anchorSmoothScroll) {
    $scope.gotoElement = function (eID){
      anchorSmoothScroll.scrollTo(eID);
    };
}]);