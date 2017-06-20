app.controller('machinesController', function machinesController($scope, $cookies, getData, dateService, filterService){
    $scope.$parent.path = "/machines";

    var cookieCategories = $cookies.get("categories");
    if (cookieCategories){
        $scope.categories = JSON.parse(cookieCategories);
    }
    else{
        $scope.categories = {
            CategoryB: true,
            CategoryE: true
        }
    };

    var cookieAvailibilityFilterValue = $cookies.get("availibilityFilterValue");
    if (cookieAvailibilityFilterValue){
        $scope.availibilityFilterValue = JSON.parse(cookieAvailibilityFilterValue);
    }
    else{
        console.log("use default");
        $scope.availibilityFilterValue = {
            useFilter: false
        }
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

    $scope.saveCategoryFilter = function(){
        $cookies.put("categories", JSON.stringify($scope.categories));
    };

    $scope.saveAvailibilityFilterValue = function(){
        $cookies.put("availibilityFilterValue", JSON.stringify($scope.availibilityFilterValue));
    };

    $scope.categoryFilter = filterService.categoryFilter;

    $scope.availibilityFilter = filterService.availibilityFilter;
})