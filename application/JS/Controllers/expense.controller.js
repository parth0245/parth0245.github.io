app.controller('expenseCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , expenseServices){
    console.log('Inside Expense Controller');
    $rootScope.isActive = 'Expense';

    $scope.moduleHeading = 'Expenses List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Expense'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.add = function(){
        $state.go('Home.addExpense');
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Expense');
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

    expenseServices.getExpenses().then(function(response){
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