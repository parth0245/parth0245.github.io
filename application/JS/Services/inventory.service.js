app.service('inventoryServices',function($http , CONSTANTS){
    this.getInventories = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
    };
});