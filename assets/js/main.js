window.onload = function(){
    var home = document.getElementById("lol-jumbotron");
    home.classList.add("loaded");
}

var renderDiv = function(){
    var comrade = document.getElementById('lol-jumbotron'); 
    var portfolioItem = "<div class='portfolio-item'>";
    portfolioItem += "<a href='https://google.com'>"
    portfolioItem += "Portfolio Item"
    portfolioItem += "</a>"
    comrade.insertAdjacentHTML('afterend', portfolioItem);
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