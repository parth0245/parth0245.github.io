app.service('receiptServices',function($http , CONSTANTS){
    this.getReceipts = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].receiptList);
    };
});