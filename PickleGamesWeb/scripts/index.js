(function(){
	var TIME_TICK = 1000;
    window.onload = function(){
        timeCheck(0, "time");        
        
    }; 
    
    /**
     * Give time elapsed in second
     * 
     * @param secs second
     * @param element id element want to get effect
     * 
     **/
    function timeCheck(secs, element){
        var time = document.getElementById(element);
        
        time.innerHTML = "You have been in this page for " + secs + " seconds";
        secs++;
        var timer = setTimeout(timeCheck, TIME_TICK, secs, element);
    }
    
    function getGif(){
        
    }
    
})();