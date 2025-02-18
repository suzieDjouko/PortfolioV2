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


const dropdownInput = document.querySelector(".dropdown_input");
const dropupbutton = document.querySelector(".dropdown");
const dropdowunbutton = document.querySelector(".dropup-button");
const navigation = document.querySelector(".navigation");
const navlist = document.querySelector(".navigation-list");

    dropupbutton.addEventListener("click", function(){
        dropupbutton.style.display = "none";
        dropdowunbutton.style.display="flex";
        /*        navlist.style.visibility = "visible";
*/
    });
    
    dropdowunbutton.addEventListener("click", function () {
        dropdowunbutton.style.display = "none";
        dropupbutton.style.display = "flex";
        /*navlist.style.visibility = "hidden";
*/
    });
    

    /*
    
     document.addEventListener("click", function (event) {

        if (
            navlist && !navigation.contains(event.target) && 
            dropupbutton && !dropupbutton.contains(event.target) &&
            dropdowunbutton && !dropdowunbutton.contains(event.target)
            && 
            dropdownInput&& !dropdownInput.contains(event.target)

        ) 
        {
            if (dropdownInput.checked) { 
                dropdownInput.style.display= "none";
                navlist.style.visibility = "hidden";


            }
            /*navlist.style.visibility = "hidden";
            dropdowunbutton.style.display = "flex";
            dropupbutton.style.display = "none";
        }
    });
    
    */
   