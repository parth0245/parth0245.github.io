app.controller('ledgerCtrl',function($rootScope , $scope , $state){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.addLedger = function(){
        $state.go('Home.addLedgers');
    }
});

app.controller('addLedgerCtrl',function($rootScope , $scope){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';
});