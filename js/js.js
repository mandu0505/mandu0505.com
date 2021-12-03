// header toggle
function toggle(){
    let header = document.getElementById("header");
    header.classList.toggle("active");
}

// sticky navigation
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}) 

// image scroll

let image = document.getElementById("mandu");

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    image.style.top = value * 0.9 + "px";
})

// image shake
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed")

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// show & hide btn
function input_show() {
    let showBx = document.getElementsByClassName("showBx");
    for(let i = 0; i < showBx.length; i++){
        let showBtn = showBx.item(i);
        showBtn.style.display = "block";
    }
}
function input_hide() {
    let hideBx = document.getElementsByClassName("showBx");
    for(let i = 0; i < hideBx.length; i++){
        let hideBtn = hideBx.item(i);
        hideBtn.style.display = "none";
    }
}

function showBtn(self){              
    if(self.value === '전체 이력 보기') {                         
        self.value = '전체 이력 숨기기';
        input_show();
    } else {                                               
        self.value = '전체 이력 보기';
        input_hide();
    }
}
