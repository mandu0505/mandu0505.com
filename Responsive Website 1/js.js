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