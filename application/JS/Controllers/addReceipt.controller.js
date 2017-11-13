app.controller('addReceiptCtrl',function($rootScope , $scope , $stateParams){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
    if(angular.isDefined($stateParams.data.customerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
});