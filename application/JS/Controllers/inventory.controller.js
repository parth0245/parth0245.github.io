app.controller('inventoryCtrl',function($rootScope,$scope, $mdToast){
    console.log('Inside Inventory Controller');
    $rootScope.isActive = 'INVENTORY';

    $scope.nutritionList = [
        {
            id: 601,
            name: 'Product 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 602,
            name: 'Producteeef 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 603,
            name: 'Product 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 604,
            name: 'Product 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 605,
            name: 'Product 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 606,
            name: 'Producterer 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 607,
            name: 'Productfff 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 608,
            name: 'Producteee 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 609,
            name: 'Product 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        },
        {
            id: 610,
            name: 'Product 1',
            calories: 'Rs 5000/-',
            fat: 'Red, 100cc,',
            carbs: '100',
            protein: 'Vendor 1',
            sodium: 'Active'
        }
    ];

});