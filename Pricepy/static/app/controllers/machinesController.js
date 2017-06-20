app.controller('machinesController', function machinesController($scope, getData, dateService, filterService, cookiesService){
    $scope.$parent.path = "/machines";

    $scope.categories = cookiesService.getObject("categories", {
        CategoryB: true,
        CategoryE: true
    });

    $scope.availibilityFilterValue = cookiesService.getObject("availibilityFilterValue", {
        useFilter: false
    });

    if ($scope.$parent.machines){
        var data = $scope.$parent.machines;
        $scope.data = data;
        //reset visibility;
        $scope.data.gallery.items.map(function(a){
            a.isVisible = true;

            //checkAvailibility
            //if selected date is expired - set avalibility to true
            if (a.availibility == false){
                if (a.availibilityDate){
                    if (dateService.isExpired(a.availibilityDate)){
                        a.availibility = true;
                        a.availibilityLabel = $scope.data.gallery.availibilityTrueLabel;
                    }
                }
            }
        });
        $scope.$parent.pageTitle = data.pageTitle;
        $scope.$parent.pageDescription = data.pageDescription;
    }
    else{
        getData.getContent("/api/Values", "machines").then(function(data){
            $scope.$parent.machines = data;
            
            $scope.data = data;

            $scope.data.gallery.items.map(function(a){
                //checkAvailibility
                //if selected date is expired - set avalibility to true
                if (a.availibility == false){
                    if (a.availibilityDate){
                        if (dateService.isExpired(a.availibilityDate)){
                            a.availibility = true;
                            a.availibilityLabel = $scope.data.gallery.availibilityTrueLabel;
                        }
                    }
                }
            });
            $scope.$parent.pageTitle = data.pageTitle;
            $scope.$parent.pageDescription = data.pageDescription;
        })
    };

    $scope.saveCategoryFilter = function(){
        cookiesService.saveObject("categories", $scope.categories);
    };

    $scope.saveAvailibilityFilterValue = function(){
        cookiesService.saveObject("availibilityFilterValue", $scope.availibilityFilterValue);
    };

    $scope.categoryFilter = filterService.categoryFilter;

    $scope.availibilityFilter = filterService.availibilityFilter;
})