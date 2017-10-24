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
    //Payments,Expense,Journal,Contra
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
  });
  app.constant('CONSTANTS', {
      headBarNavigator : [
        {url : 'Home.Inventory', name : 'INVENTORY' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-home'},
        {url : 'Home.Customers', name : 'CUSTOMERS' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-home'},
        {url : 'Home.Vendors', name : 'VENDORS' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-home'},
        {url : 'Home.Ledgers', name : 'LEDGERS' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-home'},
        {url : 'Home.Banking', name : 'CASH/BANKING' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-home'},
        {url : 'Home.Reports', name : 'REPORTS' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-home'}
    ],
    sideBarNavigator : [
        {url : 'Home.Sales', name : 'Sales' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
        {url : 'Home.Purchase', name : 'Purchase' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
        {url : 'Home.Receipt', name : 'Receipt' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
        {url : 'Home.Payments', name : 'Payments' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
        {url : 'Home.Expense', name : 'Expense' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
        {url : 'Home.Journal', name : 'Journal' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
        {url : 'Home.Contra', name : 'Contra' , imgSrc : '', glyphClasses : 'glyphicon glyphicon-signal'},
    ]
});
app.controller('bankingCtrl',function($rootScope){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';
});
app.controller('contraCtrl',function($rootScope){
    console.log('Inside Contra Controller');
    $rootScope.isActive = 'Contra';
});
app.controller('customerCtrl',function($rootScope){
    console.log('Inside Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
});
app.controller('expenseCtrl',function($rootScope){
    console.log('Inside Expense Controller');
    $rootScope.isActive = 'Expense';
});
app.controller('homeCtrl',function($scope,$rootScope,CONSTANTS){
    console.log('Inside Home Controller',CONSTANTS.sideBarNavigator);
    $rootScope.isActive = '';
    $scope.sideMenuOptions = CONSTANTS.sideBarNavigator;
    $scope.headMenuOptions = CONSTANTS.headBarNavigator;

});
app.controller('inventoryCtrl',function($rootScope){
    console.log('Inside Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
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
        $state.go('Home.Default');
    }
});
app.controller('paymentCtrl',function($rootScope){
    console.log('Inside Payment Controller');
    $rootScope.isActive = 'Payments';
});
app.controller('purchaseCtrl',function($rootScope){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';
});
app.controller('receiptCtrl',function($rootScope){
    console.log('Inside Receipt Controller');
    $rootScope.isActive = 'Receipt';
});
app.controller('reportCtrl',function($rootScope){
    console.log('Inside Reports Controller');
    $rootScope.isActive = 'REPORTS';
});
app.controller('salesCtrl',function($rootScope){
    console.log('Inside Sales Controller');
    $rootScope.isActive = 'Sales';
});
app.controller('vendorCtrl',function($rootScope){
    console.log('Inside Vendor Controller');
    $rootScope.isActive = 'VENDORS';
});