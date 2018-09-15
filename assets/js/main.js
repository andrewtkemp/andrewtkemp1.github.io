window.onload = function(){
    var home = document.getElementById("lol-jumbotron");
    home.classList.add("loaded");
}

var showPage = function(event){
    var id = event.innerText;
    var comrade = document.getElementById('lol-jumbotron');
    comrade.insertAdjacentHTML('afterend', '<div id="two">two</div>');
}