import { GLTFLoader } from './3Dmodel/GLTFLoader.js';
import { EffectComposer } from './Neon/EffectComposer.js';
import { RenderPass } from './Neon/RenderPass.js';
import { UnrealBloomPass } from './Neon/UnrealBloomPass.js';
import {ScrollTrigger} from "./GSAP/ScrollTrigger.js";

var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000);
    let distance = 20;
    camera.position.set(0,15,-distance);
    camera.lookAt(0,15,0);
var renderer = new THREE.WebGLRenderer({
    alpha: true,
    //antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000D15, 1);
document.body.appendChild( renderer.domElement );


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}
window.addEventListener('resize', onWindowResize, false);

    //x = (-b +- Math.sqrt(b^2 - 4ac)) / 2a


// function parallaxEffect(){
//     //distance = -20;
//     let Ax = camera.position.x;//k
//     let Ay = camera.position.z;//l
//     let k;
//     let l;
//     let c = -(Ax*Ax + Ay*Ay);
//     //y = (-Ax*x -c)/Ay;
//     let a = Math.round(-Ax/Ay * 100) / 100
//     let b = Math.round(-c/Ay * 100) / 100
//     console.log(a +'x+'+ b);


//     //extract x from this equation : Math.sqrt((x-k)^2+(a*x+b-l)^2)-1 = 0
//    // 1 = Sqrt[(x-k)^2+(a*x+z)^2] find x
//     //(k - a z + sqrt(1 + a^2 - a^2 k^2 - 2 a k z - z^2))/(1 + a^2)
//     let z = b-Ay;
//     let x = (Ax-a*z + Math.sqrt(1 + a*a - a*a*Ax*Ax - 2*a*Ax*z - z*z))/(1 + a*a);
//     let x = (Ax-a*z + Math.sqrt(1 + a*a - a*a*Ax*Ax - 2*a*Ax*z - z*z))/(1 + a*a);
// }




let ProgressBar = document.getElementById('ProgressBar');
let DisplayBar = document.getElementById('DisplayBar');
let status = document.getElementById('statusBar');
let ContainerBar = document.getElementById('ContainerProgressBar');
let AnimationTrigger = document.getElementById('confirmButton');
let AnimationTriggerText = document.getElementById('confirmButtonText');

let transition = false;
let modelLoaded = false;

const manager = new THREE.LoadingManager();

manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    status.textContent = itemsLoaded + ' of ' + itemsTotal + ' files.';
};
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    ProgressBar.style.width = (itemsLoaded / itemsTotal * 100) + '%';
    status.textContent = itemsLoaded + ' of ' + itemsTotal + ' files.';
};
manager.onError = function ( url ) {
    console.log( 'There was an error loading ' + url );
};
manager.onLoad = function ( ) {
        // status.style.opacity = "0";
        // ContainerBar.style.opacity = '0';
        ContainerBar.style.width = '1%';
        // status.style.webkitAnimation = "animation 1s ease-in-out forwards";
        // ContainerBar.style.webkitAnimation = "animation 1s ease-in-out forwards";
        gsap.to(status, {opacity:0, duration: 1});
        gsap.to(ContainerBar, {opacity:0, duration: 1});

        modelLoaded = true;
        Animation();
    
    
};
function Animation(){
    scroll.style.overflowY = "scroll";
    scroll.addEventListener('scroll', updateScrollPos );
    StartFadeOut = new Date().getTime();
    transition = true;
    // DisplayBar.style.webkitAnimation = "animation 1s ease-in-out forwards";
    gsap.to(DisplayBar, {opacity:0, duration: 1});
    gsap.to(DisplayBar, {display:"none", duration: 0, delay: 1});


    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".header", {scrollTrigger: ".header", opacity:0, duration: 1, y: -10, delay: 0.25});
    gsap.from(".presentation", {scrollTrigger: ".presentation", opacity:0, duration: 1,x:-20, delay: 0.25});
    
    



  


}

let StartFadeOut;
let FadeOut = false;


function animate() {
    requestAnimationFrame( animate );  
    if (modelLoaded){
        mixer.update(0.005);
    }
    renderer.render( scene, camera );
    composer.render();
    // if (transition){
    //     if (!FadeOut){
    //         if (new Date().getTime() - StartFadeOut > 2000){
    //             DisplayBar.style.display = "none";
    //             FadeOut = true;
    //         }
    //     }
    // } 
}
let OpaciteScrollDown = document.getElementById('indication-scroll');
let X = 0;
let Y = 0;
document.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
    if (window.innerWidth > 800){
        X = (event.clientX/window.innerWidth);
        Y = (event.clientY/window.innerHeight);

        camera.lookAt(X-0.5,camera.position.y+Y-0.5,0);
    }

}

function updateScrollPos(){
    camera.position.y = 15 - (scroll.scrollTop/(scroll.scrollHeight-document.body.clientHeight)*15) ;
    let angle = 1*Math.PI*(scroll.scrollTop/(scroll.scrollHeight-document.body.clientHeight)); 
    camera.position.x = -distance * Math.sin(angle);
    camera.position.z = -distance * Math.cos(angle);
    camera.lookAt(X-0.5,camera.position.y+Y-0.5,0);


    //camera.lookAt(0,camera.position.y,0);
    OpaciteScrollDown.style.opacity = 1 - (scroll.scrollTop/(document.body.clientHeight-100));

}
let scroll = document.getElementById('scroll');
let fleche = document.getElementById("fleche");








function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const starCount = 5000;
const nothingAround = 20;
let starBuffer = new THREE.BufferGeometry();
let posstar = new Float32Array(starCount * 3);
for (let i =0; i <(starCount*3); i+=3){
    let x = getRandomInt2(-50,50);
    let y = getRandomInt2(-50,50);
    let z = getRandomInt2(-50,50);
    while ((x < nothingAround)&&(x > -nothingAround)&&(y < nothingAround)&&(y > -nothingAround)&&(z < nothingAround)&&(z > -nothingAround)){
        x = getRandomInt2(-50,50);
        y = getRandomInt2(-50,50);
        z = getRandomInt2(-50,50);
    }
    posstar[i] = x;
    posstar[i+1] = y;
    posstar[i+2] = z;  
}
starBuffer.setAttribute('position', new THREE.BufferAttribute(posstar, 3));
let StarsTextureLoader = new THREE.TextureLoader().load('BGtextures/star.png');
let starMaterial = new THREE.PointsMaterial({
    color: 0xcccccc,
    size: 0.2,
    map : StarsTextureLoader,
});
let star = new THREE.Points(starBuffer, starMaterial);
scene.add(star);



class Spring extends THREE.Mesh{
    constructor(radius, turns, segmentsPerTurn, height, growth, material){
      let g = new THREE.CylinderGeometry(0.2, 0.2, 1, 16, segmentsPerTurn * turns).translate(0, 0.5, 0).rotateX(Math.PI * 0.5);
      let initPos = g.attributes.position.clone();
      super(g, material);
      this.radius = radius;
      this.turns = turns;
      this.segmentsPerTurn = segmentsPerTurn;
      this.height = height;
      this.growth = growth;
      this.update = () => {
        let _n = new THREE.Vector3(0, 1, 0), _v3 = new THREE.Vector3(), _s = new THREE.Vector3();
        let pos = g.attributes.position;
        for(let i = 0; i < initPos.count; i++){
          let ratio = initPos.getZ(i) * this.growth;
          let angle = this.turns * Math.PI * 2 * ratio;
          _v3.fromBufferAttribute(initPos, i).setZ(0);
          _v3.applyAxisAngle(_n, angle + Math.PI * 0.5);
          _v3.add(_s.setFromCylindricalCoords(this.radius, angle, this.height * ratio));
          pos.setXYZ(i, ... _v3);
        }
        g.computeVertexNormals();
        pos.needsUpdate = true;
      }
    }
  }
let spring = new Spring(5, 1, 100, 20, 1, new THREE.MeshBasicMaterial( {color: 0x62BFFF} ));
spring.update();
scene.add(spring);
spring.position.set(0,0,0);
spring.rotation.y = Math.PI/2;
  



var obj,mixer;
var loader = new GLTFLoader(manager);
loader.load("3Dmodel/astroanim.gltf", function(gltf){
    obj = gltf.scene;
    obj.children[0].children[3].visible = false;
    obj.rotation.y = Math.PI;
    obj.scale.set(10,10,10);
    obj.position.set(0,0,0);
    scene.add(obj);
    mixer = new THREE.AnimationMixer(obj);
    const clip = THREE.AnimationClip.findByName(gltf.animations, 'ArmatureAction');
    mixer.clipAction(clip.optimize()).play();
});





const pointLight = new THREE.PointLight( 0x62BFFF, 0.52);
scene.add( pointLight );
pointLight.position.set( 0, 0, -10 );

const pointLight2 = new THREE.PointLight( 0xFF48C5, 0.5);
scene.add( pointLight2 );
pointLight2.position.set( 10, 10, 10 );



const renderScene = new RenderPass( scene, camera );
const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
bloomPass.threshold = 0.5;
bloomPass.strength = 2;
bloomPass.radius = 1;
bloomPass.brightness = 0.1;
let composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bloomPass );


                





const sphere = new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16 ), new THREE.MeshBasicMaterial( { color: 0xFF48C5 } ));
const sphere1= new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16 ), new THREE.MeshBasicMaterial( { color: 0xFF48C5 } ));
const sphere2= new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16 ), new THREE.MeshBasicMaterial( { color: 0xFF48C5 } ));
const sphere3= new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16 ), new THREE.MeshBasicMaterial( { color: 0xFF48C5 } ));
const sphere4= new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16 ), new THREE.MeshBasicMaterial( { color: 0xFF48C5 } ));
scene.add( sphere, sphere1, sphere2, sphere3, sphere4 );
sphere.position.set(-14,6,10);
sphere1.position.set(13,12,5);
sphere2.position.set(15,8,15);
sphere3.position.set(-15,15,-15);
sphere4.position.set(14,7,-15);


var touchstartY = 0;
let y = 0;
let position = 15;

document.addEventListener('touchstart', function(event) {
    touchstartY = event.changedTouches[0].screenY;

}, false);

document.addEventListener('touchmove', function(event) {
    if (touchstartY > event.changedTouches[0].screenY) {
        y = (event.changedTouches[0].screenY - touchstartY) *0.05;
    }
    if (touchstartY < event.changedTouches[0].screenY) {
        y = (event.changedTouches[0].screenY - touchstartY) *0.05;
    }
    touchstartY = event.changedTouches[0].screenY;
}, false);





window.addEventListener('wheel', function(event) {
    y = -event.deltaY * 0.009;
});


function updatePosition() {
    position += y;
    y *= 0.7;
    if (position < 0) {position = 0;}
    else if (position > 15) {position = 15;}
    else{
        camera.position.y = position;
        let angle = 3*Math.PI*(camera.position.y/15); 
        camera.position.x = distance * Math.sin(-angle);
        camera.position.z = distance * Math.cos(-angle);
        camera.lookAt(0,camera.position.y,0);
    }
}


animate();




