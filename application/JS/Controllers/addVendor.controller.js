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