app.controller('organizationLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Organization Level Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Organization';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;
});

app.controller('organizationUserCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , organizationServices){
    console.log('Inside Organization Level - user Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'User';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;

    $scope.addNewUserPanel = false;
    $scope.add = function(){
        //$state.go('Home.addLedgers');
        $scope.addNewUserPanel = !$scope.addNewUserPanel;
    }

    $scope.moduleHeading = 'Application Users';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('OrganizationUser');
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

    organizationServices.getuserList().then(function(response){
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
app.controller('organizationRoleCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , organizationServices){
    console.log('Inside Organization Level - role Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Roles';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;

    $scope.add = function(){
        //$state.go('Home.addLedgers');
    }

    $scope.moduleHeading = 'Role List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('RoleList');
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
    $scope.gridOptions.rowHeight = 160;
    $scope.gridOptions.columnDefs = [
        {field : "category" ,
        cellClass : "paddingTop65" ,
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
        '</div>'},
        {field : "name" ,
        cellClass : "paddingTop65"},
        {field : "createdOn",
        cellClass : "paddingTop65" },
        {field : "updatedOn",
        cellClass : "paddingTop65" },
        {field : "modules",
        width : "25%",
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<div>'+
        '<div class="moduleSection">'+
            '<span class="pull-left">Sales</span>'+
            '<span class="pull-right">'+
                '<img src="application/Images/Assets/Module.png"/>'+
            '</span>'+
        '</div>'+
        '<div class="clearBoth moduleSection">'+
        '<span class="pull-left">Accounting</span>'+
        '<span class="pull-right">'+
            '<img src="application/Images/Assets/Module.png"/>'+
        '</span>'+
    '</div>'+
    '<div class="clearBoth moduleSection">'+
    '<span class="pull-left">Inventory</span>'+
    '<span class="pull-right">'+
        '<img src="application/Images/Assets/Module.png"/>'+
    '</span>'+
'</div>'+
'<div class="clearBoth moduleSection">'+
'<span class="pull-left">Products</span>'+
'<span class="pull-right">'+
    '<img src="application/Images/Assets/Module.png"/>'+
'</span>'+
'</div>'+
        '</div>'+
        '</div>'},
        {field : "status" ,
        cellClass : "paddingTop65" },
    ];
    organizationServices.getRoleList().then(function(response){
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
