app.controller('machinesController', function machinesController($scope, getData, dateService, filterService){
    $scope.$parent.path = "/machines";

    $scope.categories = [
        CategoryB = true,
        CategoryE = true
    ];

    $scope.availibilityFilter = {
        useFilter: false
    };

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

    $scope.categoryFilter = filterService.categoryFilter;

    $scope.availibilityFilter = filterService.availibilityFilter;
})