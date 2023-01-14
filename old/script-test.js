function Go(){
    //scroll by 100px
    window.scrollTo({
        top: 300,
        behavior: 'smooth'
    });
}
let menu = document.getElementById("menu");
let blury = document.getElementById("blur");

function onWindowResize() {
    if (window.innerWidth > 769){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
        blury.style.display = "none";
    }
}
window.addEventListener('resize', onWindowResize, false);


function ToggleHamburger(){
    let container = document.getElementById("container");

    if (menu.style.top == "0px"){
        menu.style.top = "-100%";
        container.style.overflow = "hidden";
        menu.style.opacity = "0";
        blury.style.display = "none";

    }
    else {
        menu.style.top = "0px";
        menu.style.opacity = "1";
        container.style.overflow = "visible";
        blury.style.display = "block";
    }

}