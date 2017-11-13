app.controller('addPaymentCtrl',function($rootScope , $scope , $stateParams){
    console.log('Inside Add Payment Controller');
    $rootScope.isActive = 'Payments';

    if(angular.isDefined($stateParams.data.vendorName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }


});