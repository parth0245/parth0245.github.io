var app = angular.module('siriBooks',['ui.router','ngMaterial','ngSanitize','ui.grid','ui.grid.selection','ui.grid.resizeColumns','ui.grid.pagination']);

app.config(function($stateProvider , $urlRouterProvider,  $locationProvider) {
    $stateProvider
    .state('Login', {
        url: '/login',
        templateUrl: 'application/Partials/login.html',
        controller : 'LoginCtrl'
    })
    .state('Home', {
        abstract:true,
        url: '/home',
        templateUrl: 'application/Partials/home.html',
        controller : 'homeCtrl'
    })
    .state('Home.Dashboard', {
        url: '',
        templateUrl: 'application/Partials/dashboard.html',
        controller: 'dashboardCtrl'
    })
    .state('Home.Inventory', {
        url: '/inventory',
        templateUrl: 'application/Partials/inventory.html',
        controller: 'inventoryCtrl'
    })
    .state('Home.AddInventory', {
        url: '/addInventory',
        templateUrl: 'application/Partials/addInventory.html',
        controller: 'addInventoryCtrl'
    })
    .state('Home.Customers', {
        url: '/customers',
        templateUrl: 'application/Partials/customer.html',
        controller: 'customerCtrl'
    })
    .state('Home.Vendors', {
        url: '/vendors',
        templateUrl: 'application/Partials/vendor.html',
        controller: 'vendorCtrl'
    })
    .state('Home.Ledgers', {
        url: '/ledgers',
        templateUrl: 'application/Partials/ledger.html',
        controller: 'ledgerCtrl'
    })
    .state('Home.Banking', {
        url: '/banking',
        templateUrl: 'application/Partials/banking.html',
        controller: 'bankingCtrl'
    })
    /*.state('Home.Reports', {
        url: '/reports',
        templateUrl: 'application/Partials/reports.html',
        controller: 'reportCtrl'
    })*/
    .state('Home.Sales', {
        url: '/sales',
        templateUrl: 'application/Partials/sales.html',
        controller: 'salesCtrl'
    })
    .state('Home.Purchase', {
        url: '/purchase',
        templateUrl: 'application/Partials/purchase.html',
        controller: 'purchaseCtrl'
    })
    .state('Home.Receipt', {
        url: '/receipt',
        templateUrl: 'application/Partials/receipt.html',
        controller: 'receiptCtrl'
    })
    .state('Home.Payments', {
        url: '/payment',
        templateUrl: 'application/Partials/payment.html',
        controller: 'paymentCtrl'
    })
    .state('Home.Expense', {
        url: '/expense',
        templateUrl: 'application/Partials/expense.html',
        controller: 'expenseCtrl'
    })
    .state('Home.Journal', {
        url: '/journal',
        templateUrl: 'application/Partials/journal.html',
        controller: 'journalCtrl'
    })
    .state('Home.Contra', {
        url: '/contra',
        templateUrl: 'application/Partials/contra.html',
        controller: 'contraCtrl'
    })
    .state('Home.CreditNote', {
        url: '/creditNote',
        templateUrl: 'application/Partials/creditNote.html',
        controller: 'creditNoteCtrl'
    })
    .state('Home.DebitNote', {
        url: '/debitNote',
        templateUrl: 'application/Partials/debitNote.html',
        controller: 'debitNoteCtrl'
    })
    .state('Home.SalesOrder', {
        url: '/salesOrder',
        templateUrl: 'application/Partials/salesOrder.html',
        controller: 'salesOrderCtrl'
    })
    .state('Home.PurchaseOrder', {
        url: '/puchaseOrder',
        templateUrl: 'application/Partials/purchaseOrder.html',
        controller: 'purchaseOrderCtrl'
    })

    .state('Home.Organization', {
        url: '/organizationLevel',
        templateUrl: 'application/Partials/organizationLevel.html',
        controller: 'organizationLevelCtrl'
    })
    .state('Home.Help', {
        url: '/help',
        templateUrl: 'application/Partials/help.html',
        controller: 'helpCtrl'
    })
    .state('Home.Notification', {
        url: '/notification',
        templateUrl: 'application/Partials/notification.html',
        controller: 'notificationCtrl'
    })
    .state('Home.Application', {
        url: '/applicationLevel',
        templateUrl: 'application/Partials/applicationLevel.html',
        controller: 'applicationLevelCtrl'
    })
    .state('PageNotFound', {
        url: '/PageNotFound',
        templateUrl: 'application/Partials/pageNotFound.html'
    });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/PageNotFound');
  });

app.run(function($rootScope) {
    console.log('Inside Run');
    $rootScope.isActive = '';
    $rootScope.showNavigations = true ;
  });
  app.constant('CONSTANTS', {
    headBarNavigator : [
      {url : 'Home.Dashboard', name : 'DASHBOARD' ,SelimgSrc:'application/Images/Assets/REPORTS_active.png' , imgSrc : 'application/Images/Assets/REPORTS.png', glyphClasses : 'glyphicon glyphicon-home'},
      {url : 'Home.Inventory', name : 'INVENTORY' , SelimgSrc:'application/Images/Assets/INVENTORY_active.png' , imgSrc : 'application/Images/Assets/INVENTORY.png', glyphClasses : 'glyphicon glyphicon-home'},
      {url : 'Home.Customers', name : 'CUSTOMERS' , SelimgSrc:'application/Images/Assets/CUSTOMERS_active.png' , imgSrc : 'application/Images/Assets/CUSTOMERS.png', glyphClasses : 'glyphicon glyphicon-home'},
      {url : 'Home.Vendors', name : 'VENDORS' , SelimgSrc:'application/Images/Assets/VENDORS_active.png' , imgSrc : 'application/Images/Assets/VENDORS.png', glyphClasses : 'glyphicon glyphicon-home'},
      {url : 'Home.Ledgers', name : 'LEDGERS' , SelimgSrc:'application/Images/Assets/LEDGERS_active.png' , imgSrc : 'application/Images/Assets/LEDGERS.png', glyphClasses : 'glyphicon glyphicon-home'},
      {url : 'Home.Banking', name : 'CASH/BANKING' ,SelimgSrc:'application/Images/Assets/CASH_BANKING_active.png' , imgSrc : 'application/Images/Assets/CASH_BANKING.png', glyphClasses : 'glyphicon glyphicon-home'}
  ],
  sideBarNavigator : [
      {url : 'Home.Sales', name : 'Sales' ,SelimgSrc:'application/Images/Assets/Sales_active.png' , imgSrc : 'application/Images/Assets/Sales.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.Purchase', name : 'Purchase' , SelimgSrc:'application/Images/Assets/Purchases_active.png' , imgSrc : 'application/Images/Assets/Purchases.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.Receipt', name : 'Receipt' , SelimgSrc:'application/Images/Assets/Receipts_active.png' , imgSrc : 'application/Images/Assets/Receipts.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.Payments', name : 'Payments' , SelimgSrc:'application/Images/Assets/Payments_active.png' , imgSrc : 'application/Images/Assets/Payments.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.Expense', name : 'Expense' , SelimgSrc:'application/Images/Assets/Expenses_active.png' , imgSrc : 'application/Images/Assets/Expenses.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.Journal', name : 'Journal' , SelimgSrc:'application/Images/Assets/Journal_active.png' , imgSrc : 'application/Images/Assets/Journal.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.Contra', name : 'Contra' , SelimgSrc:'application/Images/Assets/Contra_active.png' , imgSrc : 'application/Images/Assets/Contra.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.CreditNote', name : 'Credit Note' , SelimgSrc:'application/Images/Assets/Credit_Note_active.png' , imgSrc : 'application/Images/Assets/Credit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.DebitNote', name : 'Debit Note' , SelimgSrc:'application/Images/Assets/Debit_Note_active.png' , imgSrc : 'application/Images/Assets/Debit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.SalesOrder', name : 'Sales Order' ,SelimgSrc:'application/Images/Assets/Sale_Order_active.png' , imgSrc : 'application/Images/Assets/Sale_Order.png', glyphClasses : 'glyphicon glyphicon-signal'},
      {url : 'Home.PurchaseOrder', name : 'Purchase Order' , SelimgSrc:'application/Images/Assets/Purchase_Order_active.png' , imgSrc : 'application/Images/Assets/Purchase_Order.png', glyphClasses : 'glyphicon glyphicon-signal'}
  ],
  services : [
    {
      serviceA : 'someUrl'
    }
  ]
});
app.controller('addInventoryCtrl',function($rootScope , $scope){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';

    $scope.Description = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.name = "";
        $scope.desc.value = "";
        $scope.Description.push($scope.desc);
        console.log($scope.Description);
    };

    $scope.Remove = function(index){
        //var name = $scope.Description[index].name;
        $scope.Description.splice(index, 1);
        console.log($scope.Description);
    }
});
app.controller('applicationLevelCtrl',function($rootScope){
    console.log('Inside Application level Controller');
    $rootScope.isActive = 'Application Level';
});
app.controller('bankingCtrl',function($rootScope){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';
});
app.controller('contraCtrl',function($rootScope){
    console.log('Inside Contra Controller');
    $rootScope.isActive = 'Contra';
});
app.controller('creditNoteCtrl',function($rootScope){
    console.log('Inside Credit Note Controller');
    $rootScope.isActive = 'Credit Note';
});
app.controller('customerCtrl',function($rootScope){
    console.log('Inside Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
});
app.controller('dashboardCtrl',function($rootScope){
    console.log('Inside Dashboard Controller');
    $rootScope.isActive = 'DASHBOARD';
});
app.controller('debitNoteCtrl',function($rootScope){
    console.log('Inside Debit Note Controller');
    $rootScope.isActive = 'Debit Note';
});
app.controller('expenseCtrl',function($rootScope){
    console.log('Inside Expense Controller');
    $rootScope.isActive = 'Expense';
});
app.controller('helpCtrl',function($rootScope){
    console.log('Inside Help Controller');
    $rootScope.isActive = 'Help';
});
app.controller('homeCtrl',function($scope,$rootScope,CONSTANTS){
    console.log('Inside Home Controller',CONSTANTS.sideBarNavigator);
    $rootScope.isActive = '';
    $scope.sideMenuOptions = CONSTANTS.sideBarNavigator;
    $scope.headMenuOptions = CONSTANTS.headBarNavigator;

});
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
app.controller('journalCtrl',function($rootScope){
    console.log('Inside Journal Controller');
    $rootScope.isActive = 'Journal';
});
app.controller('ledgerCtrl',function($rootScope){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';
});
app.controller('LoginCtrl',function($scope,$state){
    console.log('Inside Login Controller');
    $scope.login = function(){
        $state.go('Home.Dashboard');
    }
});
app.controller('notificationCtrl',function($rootScope){
    console.log('Inside Notification Controller');
    $rootScope.isActive = 'Notification';
});
app.controller('organizationLevelCtrl',function($rootScope){
    console.log('Inside Organization Level Controller');
    $rootScope.isActive = 'Org Level';
});
app.controller('paymentCtrl',function($rootScope){
    console.log('Inside Payment Controller');
    $rootScope.isActive = 'Payments';
});
app.controller('purchaseCtrl',function($rootScope){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';
});
app.controller('purchaseOrderCtrl',function($rootScope){
    console.log('Inside Purchase Order Controller');
    $rootScope.isActive = 'Purchase Order';
});
app.controller('receiptCtrl',function($rootScope){
    console.log('Inside Receipt Controller');
    $rootScope.isActive = 'Receipt';
});
app.controller('salesCtrl',function($rootScope){
    console.log('Inside Sales Controller');
    $rootScope.isActive = 'Sales';
});
app.controller('salesOrderCtrl',function($rootScope){
    console.log('Inside Sales Order Controller');
    $rootScope.isActive = 'Sales Order';
});
app.controller('vendorCtrl',function($rootScope){
    console.log('Inside Vendor Controller');
    $rootScope.isActive = 'VENDORS';
});