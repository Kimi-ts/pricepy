app.controller('machineController', function machineController($scope, $routeParams, $location, getData){
    console.log("single machine controller runs");
    //to make section active in main menu
    $scope.$parent.path = "/machines";

    $scope.index = $routeParams.machineId;

    getData.getContent("/api/Values", "machine").then(function(data){
        $scope.data = data;
        var pageTitle = data.pageTitle;

        if ($scope.$parent.machines){
            var data = $scope.$parent.machines;
            $scope.machines = data;
            $scope.machine = data.gallery.items[$scope.index-1];
            //reset visibility;
            $scope.machines.gallery.items.map(function(a){
                a.isVisible = true;
            });
            $scope.machines.gallery.items[$scope.index-1].isVisible = false;
            $scope.isShowSecondaryImages = $scope.machine.secondaryImages.length > 1;
            $scope.$parent.pageTitle = $scope.machine.name + " " + pageTitle;
            $scope.$parent.pageDescription = $scope.machine.name + " " + data.gallery.priceLabel + " " + $scope.machine.price;

            //first item active by default
            $scope.activeImg = $scope.machine.secondaryImages[0];
        }
        else{
            getData.getContent("/api/Values", "machines").then(function(data){
                $scope.$parent.machines = data;

                $scope.machines = data;
                $scope.machine = data.gallery.items[$scope.index-1];
                $scope.machines.gallery.items[$scope.index-1].isVisible = false;
                $scope.isShowSecondaryImages = $scope.machine.secondaryImages.length > 1;
                $scope.$parent.pageTitle = $scope.machine.name + " " + pageTitle;
                $scope.$parent.pageDescription = $scope.machine.name + " " + data.gallery.priceLabel + " " + $scope.machine.price;

                //first item active by default
                $scope.activeImg = $scope.machine.secondaryImages[0];
            });
        }
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

    $scope.gotoPage = function(page){
        $location.url(page);
    }
})