adminApp.controller('galleryController', [ '$scope', '$location', '$http', 'getData', 'myVars', function galleryController($scope, $location, $http, getData, myVars){
        console.log("gallery controller runs");
        $scope.$parent.path = "/gallery";
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
        };

        $scope.save = function(){
            console.log("save called");
            if ($scope.galleryForm.$invalid){
                    return;
            };

            var tokenValue = myVars.tokenValue;
            console.log("im sensing data");
            
            $scope.updatedMachines = [];
            //TO DO
            //Check only updated values, not all
            for(var i = 0; i< $scope.machines.gallery.items.length; i++){
                var newMachine = {};
                var item = $scope.machines.gallery.items[i];
                newMachine.Name = item.name;
                newMachine.IsAvailable = item.availibility;
                newMachine.AvailibilityLabel = item.availibilityLabel;
                $scope.updatedMachines.push(newMachine);
            };

            console.log("short collection:");
            console.log($scope.updatedMachines);

            $http({
                method: 'POST',
                url: '/api/Gallery',
                data: $scope.updatedMachines,
                contentType: 'application/x-www-form-urlencoded',
                headers: {
                    "X-Token": tokenValue
                }
            }).then(function successCallback(response) {
                console.log(response);
                if (response.data){
                    console.log("true")
                    $scope.isError = false;
                    myVars.tokenValue = response.data.Value;
                    $location.path("/gallery")
                }
                else{
                    $scope.isError = true;
                }
            });
        };
    }
])