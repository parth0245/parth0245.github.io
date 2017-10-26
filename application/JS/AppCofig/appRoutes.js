var app = angular.module('siriBooks',['ui.router','ngMaterial']);

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
    .state('Home.Default', {
        url: '',
        templateUrl: 'application/Partials/default.html'
    })
    .state('Home.Inventory', {
        url: '/inventory',
        templateUrl: 'application/Partials/inventory.html',
        controller: 'inventoryCtrl'
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
    .state('Home.Reports', {
        url: '/reports',
        templateUrl: 'application/Partials/reports.html',
        controller: 'reportCtrl'
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
    .state('PageNotFound', {
        url: '/PageNotFound',
        templateUrl: 'application/Partials/pageNotFound.html'
    });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/PageNotFound');
  });
