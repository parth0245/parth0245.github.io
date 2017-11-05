app.factory('heightCalc',function($timeout){
    return {
        calculateGridHeight : function(val){
            if(val !== 0){
                $timeout(function(){
                    $('.grid').css('height',val + 43);     
                },500);
            }
            else {
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                $('.grid').css('height',height + 43);     
            },500);
        }
        }
    }
});