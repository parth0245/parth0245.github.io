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