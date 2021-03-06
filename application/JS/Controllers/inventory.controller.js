app.controller('inventoryCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , inventoryServices){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    $scope.moduleHeading = 'Inventory';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New Product'
    $scope.ifThreeBtn = false;
    $scope.showWait = true;
    
    $scope.myObj = {};

    $scope.add = function() {
        $state.go('Home.AddInventory' , { data: $scope.myObj });
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Inventory');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.AddInventory' , { data: row.entity });
        });
    }
    
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
   inventoryServices.getInventories().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
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