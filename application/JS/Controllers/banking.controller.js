app.controller('bankingCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices ,uiGridGroupingConstants){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';

    $scope.add = function(){
       // $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        return true;
    }
    $scope.moduleHeading = 'Cash / Banking Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    var setGroupValues = function( columns, rows ) {
       
        columns.forEach( function( column ) {
          if ( column.grouping && column.grouping.groupPriority > -1 ){
            // Put the balance next to all group labels.
            column.customTreeAggregationFinalizerFn = function( aggregation ) {
              if ( typeof(aggregation.groupVal) !== 'undefined') {
                aggregation.rendered = aggregation.groupVal;
              } else {
                aggregation.rendered = null;
              }
            };
          }
        });
        return columns;
      };

      
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Banking');
    $scope.gridOptions.treeRowHeaderAlwaysVisible = false;
    $scope.gridOptions.enableRowSelection = false;
var cellTemplate = '<div '+
                'ng-if="!col.grouping || col.grouping.groupPriority === undefined ||'+
                'col.grouping.groupPriority === null ||'+
                '( row.groupHeader && col.grouping.groupPriority === row.treeLevel )"'+
                'class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}'+
                '</div>';
    $scope.name = function(){
        console.log("row");
    }
    $scope.gridOptions.columnDefs = [
        { field: 'primaryGroup' , 
        grouping: { groupPriority: 0 },
        cellTemplate : cellTemplate},
        { field: 'majorGroupName' ,grouping: { groupPriority: 1 },
        cellTemplate : cellTemplate},
        { field: 'subGroupName' ,grouping: { groupPriority: 2 },
        cellTemplate: cellTemplate},
        { field: 'ledgerName'},
        { field: 'balance' , 
        treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
        customTreeAggregationFinalizerFn: function( aggregation ) {
          aggregation.rendered = aggregation.value;
        }}
];
function getRowIndex(id , grid) {
    var rowIndex = -1;
    for (var i = 0; i < grid.renderContainers.body.visibleRowCache.length; i++) {
        if (id === grid.renderContainers.body.visibleRowCache[i].uid) {
            rowIndex = i;
            break;
        }
    }
    return rowIndex;
}
function hideIcon(i) {
 $('.ui-grid-row .ui-grid-cell.ui-grid-row-header-cell i').eq(i).hide();

}
$scope.gridOptions.showTreeExpandNoChildren = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;

        $scope.gridApi.grid.registerColumnsProcessor( setGroupValues, 410 );

        $scope.gridApi.treeBase.on.rowExpanded($scope, function(row) {
        
            

            var rowIndex = getRowIndex(row .uid, row.grid);
            console.log(rowIndex);
            if ($scope.gridApi.treeBase.getRowChildren(row).length == 1 && row.treeLevel != 0){
                var exp = $scope.gridApi.treeBase.getRowChildren(row)[0];
                if(angular.isDefined(exp.entity['$$uiGrid-0009'])){
                    if(exp.entity['$$uiGrid-0009'].groupVal == "") {
                        $scope.gridApi.treeBase.toggleRowTreeState(row);
                        //hideIcon(rowIndex);
                    }
              }
           }
        
            if ($scope.gridApi.treeBase.getRowChildren(row).length == 1 && row.treeLevel == 0){
                var exp = $scope.gridApi.treeBase.getRowChildren(row)[0];
                if(angular.isDefined(exp.entity['$$uiGrid-0008'])){
                    if(exp.entity['$$uiGrid-0008'].groupVal == "") {
                        $scope.gridApi.treeBase.toggleRowTreeState(row);
                        //hideIcon(rowIndex);
                    }
              }
           }
        
           
                 $scope.changeHeight(0);
         });
         $scope.gridApi.treeBase.on.rowCollapsed($scope, function(row) {
                 $scope.changeHeight(0);
         });
      }
     
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    bankingServices.getLedgers().then(function(response){
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