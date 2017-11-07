app.service('paymentServices',function($http , CONSTANTS){
    this.getPayments = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].paymentList);
    };
});