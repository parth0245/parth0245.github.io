app.controller('receiptCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , receiptServices){
    console.log('Inside Receipt Controller');
    $rootScope.isActive = 'Receipt';

    $scope.moduleHeading = 'Receipt List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Receipt'
    $scope.ifThreeBtn = false;

    $scope.myObj = {};
    $scope.add = function() {
        $state.go('Home.addReceipt', { data: $scope.myObj });
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Receipt');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addReceipt' , { data: row.entity });
        });
    }
    
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    receiptServices.getReceipts().then(function(response){
        $scope.gridOptions.data = response.data;
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
      
   $scope.changeHeight(0);
});