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