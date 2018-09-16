const home = document.getElementById("lol-jumbotron");
const overlay = document.getElementById("overlay");
const loading = function (isLoading) {
    if (isLoading) {
        overlay.classList.add("loaded");
        return true;
    }
    overlay.classList.remove("loaded");
}
const renderDiv = function (project) {
    let comrade = document.getElementById('lol-jumbotron');
    let portfolioItem = "<div class='portfolio-item'>";
    portfolioItem += `<a href=${project.url} target="_blank"><div id=${project.id} class="image-div media"><img src="./assets/images/${project.image}"/>`
    portfolioItem += `<div class="media__body">${project.name}</div></div></a>`
    portfolioItem += "</div>"
    comrade.insertAdjacentHTML('afterend', portfolioItem);
}
const showNav = function () {
    home.classList.add("loaded");
}
const showPortfolio = function (event) {
    let id = event.innerText;
    for (let i = 0; i < projects.length; i++) {
        renderDiv(projects[i]);
    }
}

setTimeout(showNav, 1000);