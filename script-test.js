let menu = document.getElementById("menu");
let contact = document.getElementById("contact");

function onWindowResize() {
    if (window.innerWidth > 769){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
    }
}
window.addEventListener('resize', onWindowResize, false);


function ToggleHamburger(){

    if (menu.style.top == "25px"){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
    }
    else {
        menu.style.top = "25px";
        menu.style.opacity = "1";
    }

}

if (window.GestureEvent && !('touchAction' in document.body.style)) {
    document.body.addEventListener('gesturestart', (e)=>{e.preventDefault()}, {passive: false, capture:true});
  }


 

  