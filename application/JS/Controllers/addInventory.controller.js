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