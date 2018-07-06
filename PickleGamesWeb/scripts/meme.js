/* global AjaxGetPromise */
(function(){
    var $ = function(id){ return document.getElementById(id); };
    
    window.onload = function(){
        getRandomGif();
    };
    
    function getRandomGif(){
        var giphyAPI = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=Meme";
        var ajaxPromise = new AjaxGetPromise(giphyAPI);
        ajaxPromise
            .then(JSON.parse)
            .then(function(response){
                return response.data.id;
            })
            .then(function(response){
                getGif(response);
            })
            .catch(function(errorMessage){
                console.log(errorMessage);  
            });
    }
    
    function getGif(id){
        var api = "https://api.giphy.com/v1/gifs/"+ id + "?api_key=dc6zaTOxFJmzC"; 
        var ajaxPromise = new AjaxGetPromise(api);
        ajaxPromise
            .then(JSON.parse)
            .then(function(response){
                var link = document.createElement("a");
                link.href = response.data.images.fixed_height.url;
                
                var image = document.createElement("img");
                image.src = response.data.images.fixed_height.url;
                image.alt = "meme"
                
                link.appendChild(image);
                $("pickleimg").appendChild(link);
            });
    }
    
})();