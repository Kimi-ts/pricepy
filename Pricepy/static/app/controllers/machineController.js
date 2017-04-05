app.controller('machineController', function machineController($scope, $routeParams, getData){
    console.log("single machine controller runs");
    //to make section active in main menu
    $scope.$parent.path = "/machines";
    console.log($routeParams);

    $scope.index = $routeParams.machineId;

    getData.getContent("/api/Values", "machine").then(function(data){
        $scope.banner = data;
        var pageTitle = data.pageTitle;
        getData.getContent("/api/Values", "machines").then(function(data){
            $scope.machines = data;
            $scope.machine = data.gallery.items[$scope.index-1];
            $scope.machines.gallery.items.splice($scope.index-1, 1);
            $scope.isShowSecondaryImages = $scope.machine.secondaryImages.length > 1;
            $scope.$parent.pageTitle = $scope.machine.name + " " + pageTitle;
            $scope.$parent.pageDescription = $scope.machine.name + " " + data.gallery.priceLabel + " " + $scope.machine.price;
            console.log($scope.data);

            //first item active by default
            $scope.activeImg = $scope.machine.secondaryImages[0];
        });
    });

    $scope.setActive = function(image){
        $scope.activeImg = image;
    };

    $scope.setPreviousImageActive = function(){
        for(var i = 0; i< $scope.machine.secondaryImages.length; i++){
            var item = $scope.machine.secondaryImages[i];
            if (item.img.imgSrc == $scope.activeImg.img.imgSrc){
                if (i != 0){
                    $scope.setActive($scope.machine.secondaryImages[i-1]);
                    break;
                }
            }            
        }
    };

    $scope.setNextImageActive = function(){
        for(var i = 0; i< $scope.machine.secondaryImages.length; i++){
            var item = $scope.machine.secondaryImages[i];
            if (item.img.imgSrc == $scope.activeImg.img.imgSrc){
                if (i != $scope.machine.secondaryImages.length-1){
                    console.log(i);
                    $scope.setActive($scope.machine.secondaryImages[i+1]);
                    break;
                }
            }            
        }
    };
})