app.controller('importCustomerCtrl',function($scope, $rootScope , heightCalc ,CONSTANTS ,customerServices){
    console.log('Inside Import Cust Controller');
    $rootScope.isActive = 'CUSTOMERS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
    $scope.gridOptions.enableRowSelection = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }

    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    customerServices.importCustomer().then(function(response){
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
