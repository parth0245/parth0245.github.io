app.controller('addCustomerCtrl',function($rootScope , $scope ,$stateParams){
    console.log('Inside Add Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';

    if(angular.isDefined($stateParams.data.name)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }


    $scope.additionalData = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.addData = {};
        $scope.addData.name = "";
        $scope.addData.value = "";
        $scope.additionalData.push($scope.addData);
    };

    $scope.Remove = function(index){
        if($scope.additionalData.length !== 1) {
            $scope.additionalData.splice(index, 1);
         }
    }

    $scope.panelShow1 = false;
    $scope.panelShow2 = false;
    $scope.panelShow3 = false;    
    $scope.panelShow4 = false;    
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }
    $scope.togglePannel2 = function(){
        $scope.panelShow2 = !$scope.panelShow2;
    }
    $scope.togglePannel3 = function(){
        $scope.panelShow3 = !$scope.panelShow3;
    }
    $scope.togglePannel4 = function(){
        $scope.panelShow4 = !$scope.panelShow4;
    }

});