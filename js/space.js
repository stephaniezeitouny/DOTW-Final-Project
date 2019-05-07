let camera, scene, renderer, controls, mesh, sun, ring,jupiter;


init();

function init() {
  scene = new THREE.Scene();

  let width = window.innerWidth;
  let height = window.innerHeight;




  camera = new THREE.PerspectiveCamera(45, width/height, 1, 25000);
  camera.position.set(0, 0, 0);
  //z y x
  scene.add(camera);

  // let light = new THREE.DirectionalLight(0xfffffff, 1); // color, intensity
  // light.position.set(1, 1, 1); // location x, y, z
  // scene.add(light);




 //sun   
 var suntexture = new THREE.TextureLoader().load( 'sun-texture.jpg' );
var sunmaterial = new THREE.MeshBasicMaterial( { map: suntexture } );
    let sunGeometry = new THREE.SphereGeometry(800,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sun = new THREE.Mesh( sunGeometry, sunmaterial );
    // sun.position.y = 300;
    scene.add( sun );
    // sun.receiveShadow = true;
    

    //mercury
var mercurytexture = new THREE.TextureLoader().load( 'mercury-texture.jpg' );
var mercurymaterial = new THREE.MeshBasicMaterial( { map: mercurytexture } );
    let mercuryGeometry = new THREE.SphereGeometry(80,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var mercury = new THREE.Mesh( mercuryGeometry, mercurymaterial );
    mercury.position.x = 1000;
    scene.add( mercury );
    // mercury.receiveShadow = true;

//venus
var venustexture = new THREE.TextureLoader().load( 'venus-texture.jpg' );
var venusmaterial = new THREE.MeshBasicMaterial( { map: venustexture } );
    let venusGeometry = new THREE.SphereGeometry(100,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var venus = new THREE.Mesh( venusGeometry, venusmaterial );
    venus.position.x = 1500;
    scene.add( venus );
    // venus.receiveShadow = true;


    //earth
var earthtexture = new THREE.TextureLoader().load( 'earth-texture.jpg' );
var earthmaterial = new THREE.MeshBasicMaterial( { map: earthtexture } );
    let sphereGeometry = new THREE.SphereGeometry(120,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var earth = new THREE.Mesh( sphereGeometry, earthmaterial );
     earth.position.x = 2000;
    scene.add( earth );
    // earth.receiveShadow = true;

    //mars
var marstexture = new THREE.TextureLoader().load( 'mars-texture.jpg' );
var marsmaterial = new THREE.MeshBasicMaterial( { map: marstexture } );
    let marsGeometry = new THREE.SphereGeometry(100,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var mars = new THREE.Mesh( marsGeometry, marsmaterial );
    mars.position.x = 2500;
    scene.add( mars );
    // mars.receiveShadow = true;




//jupiter
var jupitertexture = new THREE.TextureLoader().load( 'jupiter-texture.jpg' );
var jupitermaterial = new THREE.MeshBasicMaterial( { map: jupitertexture } );
    let jupiterGeometry = new THREE.SphereGeometry(300,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
     jupiter = new THREE.Mesh( jupiterGeometry, jupitermaterial );
    jupiter.position.x = 3200;
    scene.add( jupiter );
    // mars.receiveShadow = true;


 //saturn
 var saturntexture = new THREE.TextureLoader().load( 'saturn-texture.jpg' );
var saturnmaterial = new THREE.MeshBasicMaterial( { map: saturntexture } );
    let saturnGeometry = new THREE.SphereGeometry(200,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var saturn = new THREE.Mesh( saturnGeometry, saturnmaterial );
    // saturn.position.y = -300;
    saturn.position.x = 4300;
    scene.add( saturn );
    // saturn.receiveShadow = true;

//saturns ring
var ringtexture = new THREE.TextureLoader().load( 'ring-texture.jpg' );
var ringgeometry = new THREE.RingGeometry( 450, 300, 32 );
var ringmaterial = new THREE.MeshBasicMaterial( { map:ringtexture, side: THREE.DoubleSide } );
ring = new THREE.Mesh( ringgeometry, ringmaterial );
ring.position.x =4300;
ring.rotation.x = -Math.PI/2.5;
scene.add( ring );


//uranus
var uranustexture = new THREE.TextureLoader().load( 'uranus-texture.jpg' );
var uranusmaterial = new THREE.MeshBasicMaterial( { map: uranustexture } );
    let uranusGeometry = new THREE.SphereGeometry(130,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var uranus = new THREE.Mesh( uranusGeometry, uranusmaterial );
    uranus.position.x = 5100;
    scene.add( uranus );
    // uranus.receiveShadow = true;


    //neptune
 var neptunetexture = new THREE.TextureLoader().load( 'neptune-texture.jpg' );
var neptunematerial = new THREE.MeshBasicMaterial( { map: neptunetexture } );
    let neptuneGeometry = new THREE.SphereGeometry(140,35,35);
    // var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var neptune = new THREE.Mesh( neptuneGeometry, neptunematerial );
    // neptune.position.y = 300;
    neptune.position.x = 5600;
    scene.add( neptune );
    // neptune.receiveShadow = true;



//stars
                var s = 5;
                var geometry = new THREE.SphereBufferGeometry( s, s, s );
                var material = new THREE.MeshBasicMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 50 } );
                for ( var i = 0; i < 3000; i ++ ) {
                    var mesh = new THREE.Mesh( geometry, material );
                    mesh.position.x = 8000 * ( 2.0 * Math.random() - 1.0 );
                    mesh.position.y = 8000 * ( 2.0 * Math.random() - 1.0 );
                    mesh.position.z = 8000 * ( 2.0 * Math.random() - 1.0 );
                    mesh.rotation.x = Math.random() * Math.PI;
                    mesh.rotation.y = Math.random() * Math.PI;
                    mesh.rotation.z = Math.random() * Math.PI;
                    mesh.matrixAutoUpdate = false;
                    mesh.updateMatrix();
                    scene.add( mesh );
                }
    




    

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);



}



  animate();
//render the scne,e update controls, recursively call function
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  sun.rotation.y+=0.005;
  ring.rotation.z+=0.01;
  jupiter.rotation.y+=0.002;


  //   let date = new Date(); // get date string
  // let timer = date.getTime() * 0.0002; // get time string, reduce number
  // camera.position.x = 800 * Math.cos(timer); // multiplier changes x coordinate
  // camera.position.z = 800 * Math.sin(timer); // multiplier changes z coordinate

// camera.position.z+=1;
camera.position.x+=10;

camera.position.y+=0.1;

camera.position.z+=2.5;
// camera.position.x+=10;
  controls.update();
}