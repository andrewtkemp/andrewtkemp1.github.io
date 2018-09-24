const home = document.getElementById("lol-jumbotron");
const overlay = document.getElementById("overlay");
const portfolio = document.getElementById("portfolio");
portfolio.addEventListener("click", function () {
    loading(true);
})
const loading = function (isLoading) {
    if (isLoading) {
        overlay.classList.add("loaded");
        return true;
    }
    overlay.classList.remove("loaded");
}
const showNav = function () {
    home.classList.add("loaded");
}
setTimeout(showNav, 1000);