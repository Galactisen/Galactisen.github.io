import { GLTFLoader } from './3Dmodel/GLTFLoader.js';
import { CSS3DRenderer, CSS3DObject } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS3DRenderer.js';


var scene = new THREE.Scene();


const distance = 20;
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1500 );
camera.position.set(0,25,distance);
camera.lookAt(0,25,0);


var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);
document.body.appendChild( renderer.domElement );






function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    height = 2*window.innerHeight;
    container.style.height = height + "px";
    camera.updateProjectionMatrix();
    let text = document.getElementById("label2");
    text.style.width = 0.7*window.innerWidth + "px";
    renderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.setSize( innerWidth, innerHeight );
}
window.addEventListener('resize', onWindowResize, false);







let ProgressBar = document.getElementById('ProgressBar');
let DisplayBar = document.getElementById('DisplayBar');
let status = document.getElementById('statusBar');
const manager = new THREE.LoadingManager();

manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    window.addEventListener("scroll", updateCamera);
    console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    status.textContent = itemsLoaded + ' of ' + itemsTotal + ' files.';
    window.scrollBy({top: 1,behavior: 'smooth'});
};
manager.onLoad = function ( ) {
    console.log( 'Loading complete!');
    DisplayBar.style.display = "none";
};
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    ProgressBar.style.width = (itemsLoaded / itemsTotal * 100) + '%';
    status.textContent = itemsLoaded + ' of ' + itemsTotal + ' files.';
};
manager.onError = function ( url ) {
    console.log( 'There was an error loading ' + url );
};

var loader = new GLTFLoader(manager);
var obj;
loader.load("3Dmodel/Orbiter_Space_Shuttle_OV-103_Discovery-150k-4096.gltf", function(gltf){
    obj = gltf.scene;
    obj.rotation.x = -Math.PI/1.7;
    obj.rotation.z = 1.1*Math.PI;
    obj.position.set(0,10,0);
    scene.add(gltf.scene);
});




var light = new THREE.HemisphereLight( 0xFFFFFF, 0x000000, 1 );
scene.add( light );
const pointLight = new THREE.PointLight(0xFFFFFF, 2, 10000);
pointLight.position.set(0, 0, -500);
scene.add(pointLight);







var labelRenderer = new CSS3DRenderer();
labelRenderer.setSize( innerWidth, innerHeight );
labelRenderer.domElement.style.position = 'fixed';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild( labelRenderer.domElement );

var box1 = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 1, 0.5), new THREE.MeshBasicMaterial({color: 0xFFFFFF , wireframe: false, transparent: true, opacity: 0}));
scene.add(box1);
box1.position.set(0, 25, 12);

let d1;
var pos1 = new THREE.Vector3(0, 0, 0.1);
var normal1 = new THREE.Vector3(0, 0, 1);
var cNormal1 = new THREE.Vector3();
var cPos1 = new THREE.Vector3();
var m41 = new THREE.Matrix4();

var div1 = document.getElementById("Acceuil");
var label1 = new CSS3DObject( div1 );
label1.position.copy(pos1);
label1.rotation.y = 0;
label1.scale.set(0.025, 0.025, 1);
box1.add( label1 );

var box4 = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 1, 0.5), new THREE.MeshBasicMaterial({color: 0xFFFFFF , wireframe: false, transparent: true, opacity: 0}));
scene.add(box4);
box4.position.set(12, 18.75, 0);

let d4;
var pos4 = new THREE.Vector3(0.1, 0, 0);
var normal4 = new THREE.Vector3(1, 0, 0);
var cNormal4 = new THREE.Vector3();
var cPos4 = new THREE.Vector3();
var m44 = new THREE.Matrix4();

var div4 = document.getElementById("Events");
var label4 = new CSS3DObject( div4 );
label4.position.copy(pos4);
label4.rotation.y = 0.5*Math.PI;
label4.scale.set(0.025, 0.025, 1);
box4.add( label4 );

var box2 = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 1, 0.5), new THREE.MeshBasicMaterial({color: 0xFFFFFF , wireframe: false, transparent: true, opacity: 0}));
scene.add(box2);
box2.position.set(0, 12.5, -12);

let d2;
var pos2 = new THREE.Vector3(0, 0, 0.1);
var normal2 = new THREE.Vector3(0, 0, -1);
var cNormal2 = new THREE.Vector3();
var cPos2 = new THREE.Vector3();
var m42 = new THREE.Matrix4();

var div2 = document.getElementById("Equipe");
var label2 = new CSS3DObject( div2 );
label2.position.copy(pos2);
label2.rotation.y = Math.PI;
label2.scale.set(0.025, 0.025, 1);
box2.add( label2 );

var box5 = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 1, 0.5), new THREE.MeshBasicMaterial({color: 0xFFFFFF , wireframe: false, transparent: true, opacity: 0}));
scene.add(box5);
box5.position.set(-12, 6.25, 0);

let d5;
var pos5 = new THREE.Vector3(-0.1, 0, 0);
var normal5 = new THREE.Vector3(-1, 0, 0);
var cNormal5 = new THREE.Vector3();
var cPos5 = new THREE.Vector3();
var m45 = new THREE.Matrix4();

var div5 = document.getElementById("Sponsors");
var label5 = new CSS3DObject( div5 );
label5.position.copy(pos5);
label5.rotation.y = -0.5*Math.PI;
label5.scale.set(0.025, 0.025, 1);
box5.add( label5 );

var box3 = new THREE.Mesh(new THREE.BoxBufferGeometry(14, 1, 0.5), new THREE.MeshBasicMaterial({color: 0xFFFFFF , wireframe: false, transparent: true, opacity: 0}));
scene.add(box3);
box3.position.set(0, 0, 12);

let d3;
var pos3 = new THREE.Vector3(0, 0, 0.1);
var normal3 = new THREE.Vector3(0, 0, 1);
var cNormal3 = new THREE.Vector3();
var cPos3 = new THREE.Vector3();
var m43 = new THREE.Matrix4();

var div3 = document.getElementById("Contacts");
var label3 = new CSS3DObject( div3 );
label3.position.copy(pos3);
label3.rotation.y = 0;
label3.scale.set(0.025, 0.025, 1);
box3.add( label3 );







const SunTextureLoader = new THREE.TextureLoader().load("BGtextures/sun.jpg");
const mercuryTexture = new THREE.TextureLoader().load( './BGtextures/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load( './BGtextures/venus.jpg');
const earthTexture = new THREE.TextureLoader().load( './BGtextures/earth.jpg');
const marsTexture = new THREE.TextureLoader().load( './BGtextures/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load( './BGtextures/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load( './BGtextures/saturn.jpg');
const saturnRingTexture = new THREE.TextureLoader().load( './BGtextures/saturn ring.png');
const uranusTexture = new THREE.TextureLoader().load( './BGtextures/uranus.jpg');
const uranusRingTexture = new THREE.TextureLoader().load( './BGtextures/uranus ring.png');
const neptuneTexture = new THREE.TextureLoader().load( './BGtextures/neptune.jpg');

const sunGeo = new THREE.SphereGeometry(40, 150, 150);
const sunMat = new THREE.MeshBasicMaterial({map: SunTextureLoader});
const sun = new THREE.Mesh(sunGeo, sunMat);
sun.position.set(0,0,-200);
scene.add(sun);

const earthGeo = new THREE.SphereGeometry(50, 150, 150);
const earthMat = new THREE.MeshBasicMaterial({map: earthTexture});
const earth = new THREE.Mesh(earthGeo, earthMat);
earth.position.set(0,0,200);
scene.add(earth);

function createPlanete(size, texture, distance1, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: texture
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    let ringMesh;
    obj.position.set(0, 0, 0);
    obj.add(mesh);
    if(ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32);
        const ringMat = new THREE.MeshBasicMaterial({
            map: ring.texture,
            side: THREE.DoubleSide
        });
        ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = distance1;
        ringMesh.rotation.x = -0.5 * Math.PI;
        ringMesh.rotation.y = 0.05 * Math.PI;
    }
    scene.add(obj);
    mesh.position.x = distance1;
    return {mesh, ringMesh , obj}
}

const mercury = createPlanete(10, mercuryTexture, 480);
const venus = createPlanete(10, venusTexture, 520);
const mars = createPlanete(10, marsTexture, 590);
const jupiter = createPlanete(25, jupiterTexture, 680);
const saturn = createPlanete(15, saturnTexture, 800, {innerRadius: 20,outerRadius: 30,texture: saturnRingTexture});
const uranus = createPlanete(12, uranusTexture, 900, {innerRadius: 200,outerRadius: 200,texture: uranusRingTexture});
const neptune = createPlanete(10, neptuneTexture, 1000);

mercury.mesh.position.set(480,0,480);
venus.mesh.position.set(-520,0,520);
jupiter.mesh.position.set(680,0,-520);
saturn.mesh.position.set(-800,0,-800);
saturn.ringMesh.position.set(-800,0,-800);
uranus.mesh.position.set(900,0,0);
uranus.ringMesh.position.set(900,0,0);
neptune.mesh.position.set(0,0,1000);
mars.mesh.position.set(-590,0,0);





function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const starCount = 10000;
const nothingAround = 40;
let starBuffer = new THREE.BufferGeometry();
let posstar = new Float32Array(starCount * 3);
for (let i =0; i <(starCount*3); i+=3){
    let x = getRandomInt2(-500,500);
    let y = getRandomInt2(-500,500);
    let z = getRandomInt2(-500,500);
    while ((x < nothingAround)&&(x > -nothingAround)&&(y < nothingAround)&&(y > -nothingAround)&&(z < nothingAround)&&(z > -nothingAround)){
        x = getRandomInt2(-500,500);
        y = getRandomInt2(-500,500);
        z = getRandomInt2(-500,500);
    }
    posstar[i] = x;
    posstar[i+1] = y;
    posstar[i+2] = z;  
}
starBuffer.setAttribute('position', new THREE.BufferAttribute(posstar, 3));
let StarsTextureLoader = new THREE.TextureLoader().load('BGtextures/stars.png');
let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map : StarsTextureLoader,
    transparent: true,
});
let star = new THREE.Points(starBuffer, starMaterial);
scene.add(star);


let text = document.getElementById("test");
let text2 = document.getElementById("test2");
let text3 = document.getElementById("test3");
let text4 = document.getElementById("test4");
let text5 = document.getElementById("test5");



function animate() {
    requestAnimationFrame( animate );  
    sun.rotation.y += 0.0005;
    earth.rotation.y += 0.0005;
    star.rotation.y += 0.00001;

    mercury.mesh.rotateY(0.002);
    venus.mesh.rotateY(0.001);
    mars.mesh.rotateY(0.0002);
    jupiter.mesh.rotateY(0.002);
    saturn.mesh.rotateY(0.002);
    uranus.mesh.rotateY(0.002);
    neptune.mesh.rotateY(0.002);

    //Around-sun-rotation
    mercury.obj.rotateY(0.0003);
    venus.obj.rotateY(0.00025);
    mars.obj.rotateY(0.0001);
    jupiter.obj.rotateY(0.00015);
    saturn.obj.rotateY(0.0001);
    uranus.obj.rotateY(0.0001);
    neptune.obj.rotateY(0.0001);
   

    // cNormal.copy(normal).applyMatrix3(box.normalMatrix);
    // cPos.copy(pos).applyMatrix4(m4.multiplyMatrices(camera.matrixWorldInverse, box.matrixWorld));
    // d = cPos.negate().dot(cNormal);
    // div.style.visibility = d < 0 ? "hidden" : "visible";

    cNormal1.copy(normal1).applyMatrix3(box1.normalMatrix);
    cPos1.copy(pos1).applyMatrix4(m41.multiplyMatrices(camera.matrixWorldInverse, box1.matrixWorld));
    d1 = cPos1.negate().dot(cNormal1);
    div1.style.visibility = d1 < 0 ? "hidden" : "visible";

    cNormal4.copy(normal4).applyMatrix3(box4.normalMatrix);
    cPos4.copy(pos4).applyMatrix4(m44.multiplyMatrices(camera.matrixWorldInverse, box4.matrixWorld));
    d4 = cPos4.negate().dot(cNormal4);
    div4.style.visibility = d4 < 0 ? "hidden" : "visible";

    cNormal2.copy(normal2).applyMatrix3(box2.normalMatrix);
    cPos2.copy(pos2).applyMatrix4(m42.multiplyMatrices(camera.matrixWorldInverse, box2.matrixWorld));
    d2 = cPos2.negate().dot(cNormal2);
    div2.style.visibility = d2 < 0 ? "hidden" : "visible";

    cNormal5.copy(normal5).applyMatrix3(box5.normalMatrix);
    cPos5.copy(pos5).applyMatrix4(m45.multiplyMatrices(camera.matrixWorldInverse, box5.matrixWorld));
    d5 = cPos5.negate().dot(cNormal5);
    div5.style.visibility = d5 < 0 ? "hidden" : "visible";

    cNormal3.copy(normal3).applyMatrix3(box3.normalMatrix);
    cPos3.copy(pos3).applyMatrix4(m43.multiplyMatrices(camera.matrixWorldInverse, box3.matrixWorld));
    d3 = cPos3.negate().dot(cNormal3);
    div3.style.visibility = d3 < 0 ? "hidden" : "visible";

    text.style.opacity = (d1/8);
    text2.style.opacity = (d2/8);
    text3.style.opacity = (d3/8);
    text4.style.opacity = (d4/8);
    text5.style.opacity = (d5/8);



    renderer.render( scene, camera );
    labelRenderer.render( scene, camera );

}

animate();


var container = document.createElement("div");
container.id = "container";
container.className = "container";
let height = 2*window.innerHeight;
container.style.height = height + "px";
document.body.appendChild(container);





function updateCamera(ev) {
    //turn camera around the object
    camera.position.y = 25 - (50*(window.scrollY/height));
    let angle = 4*Math.PI*(window.scrollY/height);            
    camera.position.x = distance * Math.sin(angle);
    camera.position.z = distance * Math.cos(angle);
    camera.lookAt(0,camera.position.y,0);


}
