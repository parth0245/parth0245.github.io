app.controller('addJournalCtrl',function($rootScope , $scope , $stateParams){
    console.log('Inside Add Journal Controller');
    $rootScope.isActive = 'Journal';

    if(angular.isDefined($stateParams.data.referance)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
    

});