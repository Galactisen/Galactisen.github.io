// function updateCamera(ev) {
//     //turn camera around the object

//     camera.position.x = distance * Math.sin(window.scrollY/100);
//     camera.position.z = distance * Math.cos(window.scrollY/100);
//     camera.position.y = 25 - window.scrollY/25;
//     camera.lookAt(0,camera.position.y,0);

//     console.log(window.scrollY);
    
//     setOpacity(Galactisen, (1 - window.scrollY/200));
    
//     if (window.scrollY > 315){
//         setOpacity(Galactisen1, (1 - (window.scrollY-315)/200));
//     }
//     else{
//         setOpacity(Galactisen1, (window.scrollY-100)/200);
//     }

//     if (window.scrollY > 630){
//         setOpacity(Galactisen2, (1 - (window.scrollY-630)/200));
//     }
//     else{
//         setOpacity(Galactisen2, (window.scrollY-315)/200);
//     }
    
// }



// function setOpacity(obj, opacity) {
//     obj.traverse(child => {
//         if (child instanceof THREE.Mesh) {
//         child.material.opacity = opacity;
//         }
//     });
// }
// var Galactisen = new THREE.Object3D();
// var Galactisen1 = new THREE.Object3D();
// var Galactisen2 = new THREE.Object3D();
// const loaderfont = new FontLoader();
// loaderfont.load('3Dtext/Roboto_Bold.json', function(font){
//     const geometry = new TextGeometry("Hello world!",{
//     font: font,
//     size: 3,
//     height: 0.2,
//     });

//     const material = new THREE.MeshBasicMaterial({
//         color: 0xffffff,
//          transparent: true
//     });
//     const material1 = new THREE.MeshBasicMaterial({
//         color: 0xffffff,
//          transparent: true,
//          opacity: 0
//     });
//     const material2 = new THREE.MeshBasicMaterial({
//         color: 0xffffff,
//          transparent: true,
//          opacity: 0
//     });

//     const textMesh = new THREE.Mesh(geometry, material);
//     textMesh.position.set(-10, 25, 7);
//     textMesh.castShadow = true;
//     Galactisen.add(textMesh);

//     const textMesh1 = new THREE.Mesh(geometry, material1);
//     textMesh1.position.set(10, 12, -7);
//     textMesh1.rotation.y = Math.PI;
//     textMesh1.castShadow = true;
//     Galactisen1.add(textMesh1);


    
//     const textMesh2 = new THREE.Mesh(geometry, material2);
//     textMesh2.position.set(-10, 0, 7);
//     textMesh2.castShadow = true;
//     Galactisen2.add(textMesh2);
    
// });


// //scene.add(Galactisen);
// scene.add(Galactisen1);
// scene.add(Galactisen2);f





// var Nasamesh;
// var NasaLoader = new THREE.TextureLoader().load('nasa.png', (NasaLoader) => {
//     NasaLoader.needsUpdate = true;
//     Nasamesh.scale.set(1.0, NasaLoader.image.height / NasaLoader.image.width, 1.0);
// });
// var Nasamaterial = new THREE.MeshBasicMaterial({
//     map: NasaLoader,
//     transparent: true,
// });
// var Nasageometry = new THREE.PlaneGeometry(10, 10);
// Nasamesh = new THREE.Mesh(Nasageometry, Nasamaterial);

// Nasamesh.position.set(0, 12, -10);
// Nasamesh.rotation.y = Math.PI;
// //scene.add(Nasamesh);













//var box = new THREE.Mesh(new THREE.BoxBufferGeometry(4, 20, 4), new THREE.MeshBasicMaterial({color: 0x0088ff, wireframe: false}));
//scene.add(box);
//box.position.set(0, 10, 0);
// let d;
// var pos = new THREE.Vector3(2, 0, 0);
// var normal = new THREE.Vector3(1, 0, 0);
// var cNormal = new THREE.Vector3();
// var cPos = new THREE.Vector3();
// var m4 = new THREE.Matrix4();

// var div = document.getDocumentById( 'div' );
// var label = new CSS3DObject( div );
// label.position.copy(pos);
// label.rotation.y = Math.PI * 0.5;
// label.scale.set(0.025, 0.025, 1);
// box.add( label );
