app.controller('addInventoryCtrl',function($rootScope , $scope ,$stateParams){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    if(angular.isDefined($stateParams.data.product)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.Description = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.name = "";
        $scope.desc.value = "";
        $scope.Description.push($scope.desc);
        console.log($scope.Description);
    };

    $scope.Remove = function(index){
        if($scope.Description.length !== 1) {
           $scope.Description.splice(index, 1);
        }
    }

    $scope.panelShow = false ;

    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
});