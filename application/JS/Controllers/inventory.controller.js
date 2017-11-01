app.controller('inventoryCtrl',function($rootScope,$scope ,$state){
    console.log('Inside Inventory Controller');
    $rootScope.isActive = 'INVENTORY';

    $scope.addProduct = function() {
        $state.go('Home.AddInventory');
    }
    $scope.nutritionList = [
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        },
        {
            product: 'Product 1',
            ledger: 'Rs 5000/-',
            specification: 'Red, 100cc,',
            stockCount: '100',
            vendor: 'Vendor 1',
            status: 'Active'
        }
    ];

});