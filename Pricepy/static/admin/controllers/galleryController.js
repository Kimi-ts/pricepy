adminApp.controller('galleryController', [ '$scope', '$location', '$http', 'getData', 'postData', 'myVars', 'dateService', function galleryController($scope, $location, $http, getData, postData, myVars, dateService){
        console.log("gallery controller runs");
        $scope.$parent.path = "/gallery";

        $scope.isDataUpdated = false;
        getData.getContent("/api/AdminValues", "adminGallery").then(function(data){
            console.log("in gallery controller");
            console.log(data);
            $scope.data = data;
            getData.getContent("/api/AdminValues", "machines").then(function(data){
                console.log(data);
                if (data == null){
                    $location.path("/");
                }
                else{
                    $scope.machines = data;
                }
            });
        });

        $scope.clearAvailibilityTextBox = function(item){
            item.availibilityLabel = "";
            item.availibilityDate = null;
        };

        $scope.editFullInfo = function(item){
            $scope.isDisplayFullInfoPanel = true;
            $scope.activeItem = item;
        };

        $scope.isExpired = function(dateToCompare){
            //return dateToCompare && dateService.isExpired(dateToCompare);
            return dateService.isExpired(dateToCompare);
        };

        $scope.save = function(){
            console.log("save called");
            if (($scope.galleryForm.$invalid || $scope.galleryForm.$pristine) && ($scope.fullInfoForm.$invalid || $scope.fullInfoForm.$pristine)){
                    return;
            };
            
            $scope.updatedMachines = [];
            //TO DO
            //Check only updated values, not all
            for(var i = 0; i< $scope.machines.gallery.items.length; i++){
                var newMachine = {};
                var item = $scope.machines.gallery.items[i];
                newMachine.Name = item.name;
                newMachine.IsAvailable = item.availibility;
                newMachine.AvailibilityLabel = item.availibilityLabel;
                newMachine.AvailibilityDate = item.availibilityDate;
                newMachine.IsDiscount = item.discount;
                newMachine.Price = item.price;
                newMachine.FullInfo = JSON.stringify(item.fullInfo);
                $scope.updatedMachines.push(newMachine);
            };

            console.log("short collection:");
            console.log($scope.updatedMachines);

            postData.postContent('/api/Gallery', $scope.updatedMachines).then(function(response) {
                if (!response.isError && response.data){
                    $scope.isDataUpdated = true;
                    $scope.isError = false;
                }
                else{
                    $scope.isError = true;
                }
            });
        };
    }
])