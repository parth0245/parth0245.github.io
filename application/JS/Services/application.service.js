app.service('applicationServices',function($http , CONSTANTS){
    this.getAccounts = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].accountingList);
    };
});