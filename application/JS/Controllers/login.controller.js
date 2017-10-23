app.controller('LoginCtrl',function($scope,$state){
    console.log('Inside Login Controller');
    $scope.login = function(){
        $state.go('Home.Default');
    }
});