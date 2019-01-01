var home = document.getElementById("lol-jumbotron");
var navLinks = document.getElementsByClassName("nav-link");
var contentContainer = document.getElementById("content-container")
var contentTitle = document.getElementById("content-title")
var renderContent = function(){
    console.log("Projects", projects)
    for(var i = 0; i < projects.length; i++){
        var newDiv = document.createElement("div")
        newDiv.classList.add("item-" + i)
        newDiv.innerText = projects[i].name
        contentContainer.append(newDiv)
    }
    contentContainer.classList.add("loaded")
}
var getContentType = function () {
    contentContainer.innerHTML = "";
    contentTitle.innerHTML = "";
    var contentType = this.getAttribute("data-id");
    var contentHeader = document.createElement("h1");
    contentHeader.innerText = contentType
    contentTitle.append(contentHeader)
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