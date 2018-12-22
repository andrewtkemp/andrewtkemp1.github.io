var home = document.getElementById("lol-jumbotron");
var navLinks = document.getElementsByClassName("nav-link");
var contentContainer = document.getElementById("content-container")
var renderContent = function(){
    var divToFill = contentContainer.querySelector("div")
    for(var i = 0; i < 100; i++){
        var newDiv = document.createElement("div")
        newDiv.innerText = "I've Had Some Work Done"
        divToFill.append(newDiv)
    }
}
var getContentType = function () {
    var contentType = this.getAttribute("data-id");
    console.log("Content Type Is ", contentType)
    contentContainer.querySelector("h1").innerHTML = contentType
    contentContainer.classList.add("loaded")
    if(contentType === "Portfolio"){
        renderContent()
    }
}

for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", getContentType, false)
}


var showNav = function () {
    home.classList.add("loaded");
}
setTimeout(showNav, 1000);