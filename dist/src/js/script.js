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
    .state('Home.Inventory', {
        url: '/inventory',
        templateUrl: 'application/Partials/inventory.html',
        controller: 'inventoryCtrl'
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
app.controller('LoginCtrl',function($scope,$state){
    console.log('Inside Login Controller');
    $scope.login = function(){
        $state.go('Home.Default');
    }
});
app.controller('purchaseCtrl',function($rootScope){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';
});
app.controller('salesCtrl',function($rootScope){
    console.log('Inside Sales Controller');
    $rootScope.isActive = 'Sales';
});