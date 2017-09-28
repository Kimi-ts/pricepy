app.controller('toggleMenuController', ["$scope", "$rootScope", "$window", function($scope, $rootScope, $window) {
  //console.log("toggle controller runs");

  $scope.isMobile = $window.innerWidth < 768;
  //console.log("is mobile");
  //console.log($scope.isMobile);
  $scope.isOpen = !$scope.isMobile;
  //console.log($window.innerWidth);

  //console.log($scope.isOpen);

  $scope.toggleMenu = function(){
    $scope.isOpen = !$scope.isOpen;
  }

  $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    $scope.isMobile = $window.innerWidth < 768;
      $scope.isOpen = !$scope.isMobile;
    });
}]);