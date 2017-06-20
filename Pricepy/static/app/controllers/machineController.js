app.controller('machineController', function machineController($scope, $routeParams, $location, getData, filterService){
    console.log("single machine controller runs");
    $scope.$parent.path = "/machines";

    $scope.machineName = $routeParams.machineId;

    $scope.categories = [
        CategoryB = true,
        CategoryE = true
    ];

    $scope.availibilityFilter = {
        useFilter: false
    };

    getData.getContent("/api/Values", "machine").then(function(data){
        $scope.data = data;
        var pageTitle = data.pageTitle;

        if ($scope.$parent.machines){
            var data = $scope.$parent.machines;
            $scope.machines = data;
            $scope.machine = {};
            //reset visibility;
            var isFound = false;
            $scope.machines.gallery.items.map(function(a){
                a.isVisible = true;
                if (a.name == $scope.machineName){
                    $scope.machine = a;
                    $scope.index = a.id;
                    isFound = true;
                }
            });
            //redirect to 1st if not found
            if (!isFound){
                $location.url($scope.machines.gallery.items[0].href)
            }
            $scope.machine.priceLabel = data.gallery.priceLabel;
            $scope.machines.gallery.items[$scope.index-1].isVisible = false;
            $scope.isShowSecondaryImages = $scope.machine.secondaryImages.length > 1;
            $scope.$parent.pageTitle = $scope.machine.description + " " + pageTitle;
            $scope.$parent.pageDescription = $scope.machine.description + " " + data.gallery.priceLabel + " " + $scope.machine.price;

            //first item active by default
            $scope.activeImg = $scope.machine.secondaryImages[0];
        }
        else{
            getData.getContent("/api/Values", "machines").then(function(data){
                $scope.$parent.machines = data;

                $scope.machines = data;
                $scope.machine = {};
                var isFound = false;
                $scope.machines.gallery.items.map(function(a){
                    if (a.name == $scope.machineName){
                        $scope.machine = a;
                        $scope.index = a.id;
                        isFound = true;
                    }
                });
                //redirect to 1st if not found
                if (!isFound){
                    $location.url($scope.machines.gallery.items[0].href)
                }
                $scope.machine.priceLabel = data.gallery.priceLabel;
                $scope.machines.gallery.items[$scope.index-1].isVisible = false;
                $scope.isShowSecondaryImages = $scope.machine.secondaryImages.length > 1;
                $scope.$parent.pageTitle = $scope.machine.description + " " + pageTitle;
                $scope.$parent.pageDescription = $scope.machine.description + " " + data.gallery.priceLabel + " " + $scope.machine.price;

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
    };

    $scope.categoryFilter = filterService.categoryFilter;
    $scope.availibilityFilter = filterService.availibilityFilter;
})