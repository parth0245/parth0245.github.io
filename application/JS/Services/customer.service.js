app.service('customerServices',function($http , CONSTANTS){
    this.getCustomer = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].customerList);
    };
    this.importCustomer = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importCustomer);
    }
});