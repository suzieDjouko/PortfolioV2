document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navigation-list a");
    let currentURL = document.location.href;

    navLinks.forEach(function (link) {
        if (currentURL.includes(link.href)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


const dropupbutton = document.querySelector(".dropdown");
const dropdowunbutton = document.querySelector(".dropup-button");
dropupbutton.addEventListener("click", function(){
    dropupbutton.style.display = "none";
    dropdowunbutton.style.display="flex";
});
dropdowunbutton.addEventListener("click", function(){
    dropdowunbutton.style.display = "none";
    dropupbutton.style.display="flex"
});


const button_theme = document.querySelector('.button-theme');
const body = document.body; 

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

button_theme.addEventListener("click", function(){
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    
});