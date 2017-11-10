app.service('bankingServices',function($http , CONSTANTS){
    this.getLedgers = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].bankingLedger);
    };
});