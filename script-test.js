

 

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
    var endDate = new Date(Date.UTC(2023,4,3)); // 2017-05-29T00:00:00Z
    var diff = endDate - now; 

    var hours   = Math.floor(diff / 3.6e6);
    var minutes = Math.floor((diff % 3.6e6) / 6e4);
    var seconds = Math.floor((diff % 6e4) / 1000);

    
    let time =  hours+":" + minutes+":"+ seconds;
    document.getElementById("Timer").innerText = time; 
    //time = "0:0:0"
    if(time != "0:0:0"){ 
    let t = setTimeout(function(){ currentTime() }, 1000);
    }
    else{
        gsap.to("#clock", { display:"none",duration: 0, delay: 0});

    }
  }
  
  clock = document.getElementById("clock");
  currentTime();
