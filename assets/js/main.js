window.onload = function(){
    var home = document.getElementById("lol-jumbotron");
    home.classList.add("loaded");
}

var renderDiv = function(){
    var comrade = document.getElementById('lol-jumbotron'); 
    var div = "<div class='yearning'>" + "yearning" + "</div>";
    comrade.insertAdjacentHTML('afterend', div);
}
var showPortfolio = function(event){
    var id = event.innerText;
    var delay = 1000
    var portfolioLength = 10;
    for(var i = 0; i < portfolioLength; i++){
        delay = delay + 1000;
        setTimeout(renderDiv, delay)
    }
}