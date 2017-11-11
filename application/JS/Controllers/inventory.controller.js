app.controller('inventoryCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , inventoryServices){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    $scope.moduleHeading = 'Inventory';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New Product'
    $scope.ifThreeBtn = false;
    $scope.showWait = true;
    

    $scope.add = function() {
        $state.go('Home.AddInventory');
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Inventory');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
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
   inventoryServices.getInventories().then(function(response){
            
                $scope.gridOptions.data = response.data;
                $scope.showWait = false;
            
       
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
        $scope.showWait = false;
   });
      
   $scope.changeHeight(0);
});