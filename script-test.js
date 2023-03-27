

 

let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let close = document.getElementById("close");
let open = document.getElementById("open");

function onWindowResize() {
    if (window.innerWidth > 769){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
        gsap.to("#close", { display:"none",duration: 0});
        gsap.to("#open", { display:"none",duration: 0});
    }
    else{
        gsap.to("#open", { display: "flex",duration: 0, });
        gsap.to("#open", { opacity: 1, duration: 0.5, delay: 0.30 });
    }
}
window.addEventListener('resize', onWindowResize, false);


function ToggleHamburger(){

    if (menu.style.top == "0px"){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
        gsap.to("#close", { opacity: 0,duration: 0.25 });
        gsap.to("#close", { display:"none",duration: 0, delay: 0.25});

        gsap.to("#open", { display: "flex",duration: 0, delay: 0.25 });
        gsap.to("#open", { opacity: 1, duration: 0.25, delay: 0.30 });

        //open.style.display = "flex";
        //close.style.display = "none";
    }
    else {
        gsap.to("#open", { opacity: 0,duration: 0.25 });
        gsap.to("#open", { display:"none",duration: 0, delay: 0.25});

        gsap.to("#close", { display: "flex",duration: 0, delay: 0.25 });
        gsap.to("#close", { opacity: 1, duration: 0.25, delay: 0.30 });

        menu.style.top = "0px";
        menu.style.opacity = "1";
    }

}

if (window.GestureEvent && !('touchAction' in document.body.style)) {
    document.body.addEventListener('gesturestart', (e)=>{e.preventDefault()}, {passive: false, capture:true});
  }


  function currentTime() {
    var now = new Date();
    var date = new Date("04/03/2023");   

    var delta = Math.abs(date - now) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;

    time = Math.floor(days) + ":" + Math.floor(hours) + ":" + Math.floor(minutes) + ":" + Math.floor(seconds);

    
    
    document.getElementById("Timer").innerText = time; 
    //time = "0:0:0"
    if(time != "0:0:0:0"){ 
    let t = setTimeout(function(){ currentTime() }, 1000);
    }
    else{
        gsap.to("#clock", { display:"none",duration: 0, delay: 0});

    }
  }

  
  clock = document.getElementById("clock");
  currentTime();
