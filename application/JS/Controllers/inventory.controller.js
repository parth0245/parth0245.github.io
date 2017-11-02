app.controller('inventoryCtrl',function($rootScope,$scope ,$state ,$timeout){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    

    $scope.addProduct = function() {
        $state.go('Home.AddInventory');
    }
   
    $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
            { field: 'product',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                              '<span>{{grid.getCellValue(row, col)}}</span>'+
                              '<span class="productInactive" ng-if="!row.isSelected">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                              '</span>'+
                              '<span class="productInactive" ng-if="row.isSelected">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                              '</span>'+
                              '</div>' },
            { field: 'ledger',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
            { field: 'specification' },
            { field: 'stockCount'},
            { field: 'vendor',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                            '<span>{{grid.getCellValue(row, col)}}</span>'+
                            '<span class="productInactive" ng-if="!row.isSelected">'+
                            '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                            '</span>'+
                            '<span class="productInactive" ng-if="row.isSelected">'+
                            '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                            '</span>'+
                            '</div>' },
            { field: 'status'}
        ],
        rowHeight: 40,
        enableRowSelection: true,
        enableColumnResizing: false,
        enableRowHeaderSelection: false,
        multiSelect : false,
        enableColumnMenus : false,
        enableSorting :false,
        enableVerticalScrollbar : 0 ,
        enablePaginationControls: false,
        paginationPageSizes: [5 , 10, 20 , 25],
        paginationPageSize: 5,  
     
        onRegisterApi: function( gridApi ) {
          $scope.gridApi = gridApi;
        }
      };
      
$scope.changeHeight = function(){
    $timeout(function(){
        var height = $('.ui-grid-canvas').height();
        $('.grid').css('height',height + 45);     
    },500);
     
}

     
      $scope.gridOptions.data = [
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 2',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 3',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 4',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 5',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 6',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 7',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 8',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 9',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 10',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        }
    ];
    $scope.changeHeight();
});