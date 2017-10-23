app.controller('homeCtrl',function($scope,$rootScope,CONSTANTS){
    console.log('Inside Home Controller',CONSTANTS.sideBarNavigator);
    $rootScope.isActive = '';
    $scope.sideMenuOptions = CONSTANTS.sideBarNavigator;
    $scope.headMenuOptions = CONSTANTS.headBarNavigator;

});