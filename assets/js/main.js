var home = document.getElementById("lol-jumbotron");
var navLinks = document.getElementsByClassName("nav-link");
var contentContainer = document.getElementById("content-container");
var contentTitle = document.getElementById("content-title");
var lyricSpan = document.getElementById("lmao-wtf-is-wrong-with-you")
var renderContent = function (type) {
    console.log("Projects", projects)
    for (var i = 0; i < projects.length; i++) {
        var newDiv = document.createElement("div")
        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", projects[i].url);
        newAnchor.innerText = projects[i].name
        newDiv.classList.add("item-" + i)
        newDiv.append(newAnchor)
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
    renderContent(contentType)
    changePurposefullyObscureLyric(contentType)
}
var changePurposefullyObscureLyric = function (type) {
    if (type === "Portfolio") {
        lyricSpan.innerText = "good stories and real life don't overlap"
    }
    else if (type === "Portfolio") {
        lyricSpan.innerText = "Test"
    }
    else if (type === "Portfolio") {
        lyricSpan.innerText = "Test"
    }
    else {
        lyricSpan.innerText = "call anyone enough and they’ll answer"
    }
}
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", getContentType, false)
}


var showNav = function () {
    home.classList.add("loaded");
}
setTimeout(showNav, 1000);