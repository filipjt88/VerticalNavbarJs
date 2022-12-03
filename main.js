let verticalNavbar = document.querySelector(".vertical-navbar");
let nav                   = document.querySelector("nav");
let bars                 = document.querySelector(".fa-bars");

verticalNavbar.addEventListener("click", () => {
    if(nav.style.width === "" && nav.style.height === "") {
        nav.style.width = "500px";
        nav.style.height = "100%";
        nav.style.background = "#000";
        nav.style.transition = "width 3s, height 3s";
        bars.style.transform = "rotate(90deg)";
        bars.style.transition = "1s";
    } else if(nav.style.width === "500px" && nav.style.height === "100%") {
        nav.style.width =  "";
        nav.style.height = "";
        nav.style.background = "#000";
        bars.style.transform = "rotate(0deg)";
        bars.style.transition = "1s";
    }
});
