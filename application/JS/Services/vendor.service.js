app.service('vendorServices',function($http , CONSTANTS){
    this.getVendors = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].vendorList);
    };
    this.importVendor = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importVendor);
    }
});