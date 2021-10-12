// header toggle
function toggle(){
    let header = document.getElementById("header");
    header.classList.toggle("active");
}

// sticky navigation
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}) ;

// image scroll

let image = document.getElementById("mandu");

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    image.style.top = value * 1 + "px";
})