var home = document.getElementById("lol-jumbotron");
var navLinks = document.getElementsByClassName("nav-link");
var contentContainer = document.getElementById("content-container")
var getContentType = function () {
    var contentType = this.getAttribute("data-id");
    console.log("Content Type Is ", contentType)
    contentContainer.querySelector("h3").innerHTML = contentType
    contentContainer.classList.add("loaded")
}
for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", getContentType, false)
}


var showNav = function () {
    home.classList.add("loaded");
}
setTimeout(showNav, 1000);