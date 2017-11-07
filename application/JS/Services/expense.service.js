app.service('expenseServices',function($http , CONSTANTS){
    this.getExpenses = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].expenseList);
    };
});