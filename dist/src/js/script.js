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
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'inventoryCtrl'
    })
    .state('Home.AddInventory', {
        url: '/addInventory',
        templateUrl: 'application/Partials/addInventory.html',
        controller: 'addInventoryCtrl'
    })
    .state('Home.Customers', {
        url: '/customers',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'customerCtrl'
    })
    .state('Home.addCustomers', {
        url: '/addCustomers',
        templateUrl: 'application/Partials/addCustomer.html',
        controller: 'addCustomerCtrl'
    })
    .state('Home.Vendors', {
        url: '/vendors',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'vendorCtrl'
    })
    .state('Home.addVendors', {
        url: '/addVendors',
        templateUrl: 'application/Partials/addVendor.html',
        controller: 'addVendorCtrl'
    })
    .state('Home.ImportVendors', {
        url: '/importVendors',
        templateUrl: 'application/Partials/importVendor.html',
        controller: 'importVendorCtrl'
    })
    .state('Home.Ledgers', {
        url: '/ledgers',
        templateUrl: 'application/Partials/ledger.html',
        controller: 'ledgerCtrl'
    })
    .state('Home.addLedgers', {
        url: '/addLedgers',
        templateUrl: 'application/Partials/addLedger.html',
        controller: 'addLedgerCtrl'
    })
    .state('Home.Banking', {
        url: '/banking',
        templateUrl: 'application/Partials/banking.html',
        controller: 'bankingCtrl'
    })
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
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'receiptCtrl'
    })
    .state('Home.addReceipt', {
        url: '/addReceipt',
        templateUrl: 'application/Partials/addReceipt.html',
        controller: 'addReceiptCtrl'
    })
    .state('Home.Payments', {
        url: '/payment',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'paymentCtrl'
    })
    .state('Home.addPayments', {
        url: '/addPayment',
        templateUrl: 'application/Partials/addPayment.html',
        controller: 'addPaymentCtrl'
    })
    .state('Home.Expense', {
        url: '/expense',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'expenseCtrl'
    })
    .state('Home.addExpense', {
        url: '/addExpense',
        templateUrl: 'application/Partials/addExpense.html',
        controller: 'addExpenseCtrl'
    })
    .state('Home.Journal', {
        url: '/journal',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'journalCtrl'
    })
    .state('Home.addJournal', {
        url: '/addJournal',
        templateUrl: 'application/Partials/addJournal.html',
        controller: 'addJournalCtrl'
    })
    .state('Home.Contra', {
        url: '/contra',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'contraCtrl'
    })
    .state('Home.addContra', {
        url: '/addContra',
        templateUrl: 'application/Partials/addContra.html',
        controller: 'addContraCtrl'
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
    .state('Home.User', {
        url: '/organizationUser',
        templateUrl: 'application/Partials/organizationUser.html',
        controller: 'organizationUserCtrl'
    })
    .state('Home.Roles', {
        url: '/organizationRoles',
        templateUrl: 'application/Partials/organizationRole.html',
        controller: 'organizationRoleCtrl'
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
    .state('Home.Format', {
        url: '/applicationFormat',
        templateUrl: 'application/Partials/applicationFormatLevel.html',
        controller: 'applicationFormatLevelCtrl'
    })
    .state('Home.Tax', {
        url: '/applicationTax',
        templateUrl: 'application/Partials/applicationTaxLevel.html',
        controller: 'applicationTaxLevelCtrl'
    })
    .state('Home.Accounting', {
        url: '/applicationAccounting',
        templateUrl: 'application/Partials/applicationAccountingLevel.html',
        controller: 'applicationAccountingLevelCtrl'
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
    $rootScope.isSubActive = '';
    $rootScope.showNavigations = true ;
    $rootScope.appTitle = 'Siri-Books';
  });
app.constant('CONSTANTS', {
        appLevel : 0,
        service : [
                {
                        inventoryList : 'application/fixture/inventoryList.json',
                        customerList : 'application/fixture/customerList.json',
                        vendorList : 'application/fixture/vendorList.json',
                        importVendor : 'application/fixture/importVendors.json',
                        receiptList : 'application/fixture/receiptList.json',
                        paymentList : 'application/fixture/paymentList.json',
                        expenseList : 'application/fixture/expenseList.json',
                        journalList : 'application/fixture/journalList.json',
                        contraList : 'application/fixture/contraList.json'
                },{
                        inventoryList : "live url here",
                        customerList : '',
                        vendorList : '',
                        importVendor :'',
                        receiptList :'',
                        paymentList : '',
                        expenseList : '',
                        journalList : '',
                        contraList : ''
                }
        ],
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
        organizationNavigation : [
                {url : 'Home.Organization', name : 'Organization' ,SelimgSrc:'application/Images/Assets/Admin-Settings inside/Organization_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Organization_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.User', name : 'User' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Users_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Users_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Roles', name : 'Roles' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Roles_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Roles_inactive.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        applicationNavigation :[
                {url : 'Home.Format', name : 'Format' ,SelimgSrc:'application/Images/Assets/Admin-Settings inside/Format_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Format_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Tax', name : 'Tax' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Tax_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Tax_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Accounting', name : 'Accounting' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Accounting_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Accounting_inactive.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        gridOptionsConstants : function(gridName){
                return {
                        enableSorting: true,
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
                        columnDefs : this[gridName+"fields"]
                }
        },
        Paymentfields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                { field: 'amount',
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
                { field: 'date' },
                { field: 'modeOfPayment'}       
        ],
        Expensefields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                { field: 'amount',
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
                { field: 'date' },
                { field: 'expenseDescription'}       
        ],
        Journalfields :[
                { field: 'referance',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                        { field: 'date' },
                        { field: 'fromLedger'},
                        { field: 'toLedger'},
                        { field: 'amount'},
        ],
        Contrafields :[
                { field: 'transferredFrom',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                        { field: 'transferredTo' },
                        { field: 'date'},
                        { field: 'reference'},
                        { field: 'amount'},
        ],
        Receiptfields :[
                { field: 'customerName',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'amount',
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
        { field: 'date' },
        { field: 'modeOfPayment'}
        ],
        Inventoryfields : [
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
Customerfields : [
        { field: 'name',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
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
        { field: 'address' },
        { field: 'type'},
        { field: 'contact'},
        { field: 'status'}
],
Vendorfields : [
        { field: 'name',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
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
        { field: 'address' },
        { field: 'product'},
        { field: 'contact'},
        { field: 'status'}
],
ImportVendorfields : [
        { field: 'vendorName' },
        { field: 'address'},
        { field: 'contact'},
        { field: 'rowNo'}
]
});
app.controller('addContraCtrl',function($rootScope , $scope){
    console.log('Inside Add Contra Controller');
    $rootScope.isActive = 'Contra';

});
app.controller('addCustomerCtrl',function($rootScope , $scope){
    console.log('Inside Add Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';


    $scope.additionalData = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.addData = {};
        $scope.addData.name = "";
        $scope.addData.value = "";
        $scope.additionalData.push($scope.addData);
    };

    $scope.Remove = function(index){
        if($scope.additionalData.length !== 1) {
            $scope.additionalData.splice(index, 1);
         }
    }


});
app.controller('addExpenseCtrl',function($rootScope , $scope){
    console.log('Inside Add Expense Controller');
    $rootScope.isActive = 'Expense';

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
        if($scope.Description.length !== 1) {
           $scope.Description.splice(index, 1);
        }
    }
});
app.controller('addJournalCtrl',function($rootScope , $scope){
    console.log('Inside Add Journal Controller');
    $rootScope.isActive = 'Journal';

    

});
app.controller('addPaymentCtrl',function($rootScope , $scope){
    console.log('Inside Add Payment Controller');
    $rootScope.isActive = 'Payments';
});
app.controller('addReceiptCtrl',function($rootScope , $scope){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
});
app.controller('addVendorCtrl',function($rootScope , $scope){
    console.log('Inside Add Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.vendorsData = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.name = "";
        $scope.desc.value = "";
        $scope.vendorsData.push($scope.desc);
    };

    $scope.Remove = function(index){
        if($scope.vendorsData.length !== 1) {
            $scope.vendorsData.splice(index, 1);
         }
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
app.controller('contraCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , contraServices){
    console.log('Inside Contra Controller');
    $rootScope.isActive = 'Contra';

    $scope.moduleHeading = 'Contra List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Contra'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.add = function(){
        $state.go('Home.addContra');
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Contra');
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

    contraServices.getContraList().then(function(response){
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
app.controller('creditNoteCtrl',function($rootScope){
    console.log('Inside Credit Note Controller');
    $rootScope.isActive = 'Credit Note';
});
app.controller('customerCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , customerServices){
    console.log('Inside Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
    
    $scope.moduleHeading = 'Customers List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;

    $scope.add = function() {
        $state.go('Home.addCustomers');
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Customer');
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
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    customerServices.getCustomer().then(function(response){
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
app.controller('dashboardCtrl',function($rootScope){
    console.log('Inside Dashboard Controller');
    $rootScope.isActive = 'DASHBOARD';
});
app.controller('debitNoteCtrl',function($rootScope){
    console.log('Inside Debit Note Controller');
    $rootScope.isActive = 'Debit Note';
});
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
app.controller('helpCtrl',function($rootScope){
    console.log('Inside Help Controller');
    $rootScope.isActive = 'Help';
});
app.controller('homeCtrl',function($scope,$rootScope,CONSTANTS ,$state){
    console.log('Inside Home Controller');
    $rootScope.isActive = '';
    $scope.sideMenuOptions = CONSTANTS.sideBarNavigator;
    $scope.headMenuOptions = CONSTANTS.headBarNavigator;
    $scope.organizationNavigation = CONSTANTS.organizationNavigation;
    $scope.backToHome = function(){
        $rootScope.isActive = '';
        $rootScope.showNavigations = true ;
        $state.go('Home.Dashboard');
    }
});
app.controller('importVendorCtrl',function($scope, $rootScope , heightCalc ,CONSTANTS ,vendorServices){
    console.log('Inside Import Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportVendor');
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

    vendorServices.importVendor().then(function(response){
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

app.controller('inventoryCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , inventoryServices){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    $scope.moduleHeading = 'Inventory';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New Product'
    $scope.ifThreeBtn = false;
    

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
app.controller('journalCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , journalServices){
    console.log('Inside Journal Controller');
    $rootScope.isActive = 'Journal';

    $scope.moduleHeading = 'Journal List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Journal'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.add = function(){
        $state.go('Home.addJournal');
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Journal');
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

    journalServices.getJournals().then(function(response){
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
app.controller('ledgerCtrl',function($rootScope , $scope , $state){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.addLedger = function(){
        $state.go('Home.addLedgers');
    }
});

app.controller('addLedgerCtrl',function($rootScope , $scope){
    console.log('Inside Add Inventory Controller');
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
app.controller('organizationLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Organization Level Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Organization';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;
});

app.controller('organizationUserCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Organization Level - user Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'User';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;
});
app.controller('organizationRoleCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Organization Level - role Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Roles';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;
});

/* Application Level */
app.controller('applicationFormatLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Application Format Level Controller');
    $rootScope.isActive = 'Application Level';
    $rootScope.isSubActive = 'Format';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.applicationNavigation;
});

app.controller('applicationTaxLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Application Level Tax Controller');
    $rootScope.isActive = 'Application Level';
    $rootScope.isSubActive = 'Tax';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.applicationNavigation;
});
app.controller('applicationAccountingLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Application Level Accounting Controller');
    $rootScope.isActive = 'Application Level';
    $rootScope.isSubActive = 'Accounting';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.applicationNavigation;
});

app.controller('paymentCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , paymentServices){
    console.log('Inside Payment Controller');
    $rootScope.isActive = 'Payments';
    
    $scope.moduleHeading = 'Payment List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Payment'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.add = function(){
        $state.go('Home.addPayments');
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Payment');
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

    paymentServices.getPayments().then(function(response){
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
app.controller('purchaseCtrl',function($rootScope){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';
});
app.controller('purchaseOrderCtrl',function($rootScope){
    console.log('Inside Purchase Order Controller');
    $rootScope.isActive = 'Purchase Order';
});
app.controller('receiptCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , receiptServices){
    console.log('Inside Receipt Controller');
    $rootScope.isActive = 'Receipt';

    $scope.moduleHeading = 'Receipt List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Receipt'
    $scope.ifThreeBtn = false;

    $scope.add = function() {
        $state.go('Home.addReceipt');
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Receipt');
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
app.controller('salesCtrl',function($rootScope){
    console.log('Inside Sales Controller');
    $rootScope.isActive = 'Sales';
});
app.controller('salesOrderCtrl',function($rootScope){
    console.log('Inside Sales Order Controller');
    $rootScope.isActive = 'Sales Order';
});
app.controller('vendorCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , vendorServices){
    console.log('Inside Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.moduleHeading = 'Vendor List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;

    $scope.add = function() {
        $state.go('Home.addVendors');
    }
    $scope.import = function(){
        $state.go('Home.ImportVendors');
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Vendor');
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
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    //$scope.gridOptions.data = [];
    vendorServices.getVendors().then(function(response){
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
app.service('contraServices',function($http , CONSTANTS){
    this.getContraList = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].contraList);
    };
});
app.service('customerServices',function($http , CONSTANTS){
    this.getCustomer = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].customerList);
    };
});
app.service('expenseServices',function($http , CONSTANTS){
    this.getExpenses = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].expenseList);
    };
});
app.factory('heightCalc',function($timeout){
    return {
        calculateGridHeight : function(val){
            if(val !== 0){
                $timeout(function(){
                    $('.grid').css('height',val + 43);     
                },500);
            }
            else {
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                $('.grid').css('height',height + 43);     
            },500);
        }
        }
    }
});
app.service('inventoryServices',function($http , CONSTANTS){
    this.getInventories = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
    };
});
app.service('journalServices',function($http , CONSTANTS){
    this.getJournals = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].journalList);
    };
});
app.service('paymentServices',function($http , CONSTANTS){
    this.getPayments = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].paymentList);
    };
});
app.service('receiptServices',function($http , CONSTANTS){
    this.getReceipts = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].receiptList);
    };
});
app.service('vendorServices',function($http , CONSTANTS){
    this.getVendors = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].vendorList);
    };
    this.importVendor = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importVendor);
    }
});