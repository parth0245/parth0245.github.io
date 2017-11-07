app.service('journalServices',function($http , CONSTANTS){
    this.getJournals = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].journalList);
    };
});