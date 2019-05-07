let camera, scene, renderer, controls, mesh, sun;


init();

function init() {
  scene = new THREE.Scene();

  let width = window.innerWidth;
  let height = window.innerHeight;

      // cubemap
  // scene.background = new THREE.CubeTextureLoader()
  //   .setPath( 'skybox' )
  //   .load( [
  //     'skybox_right1.png',
  //     'skybox_left2.png',
  //     'pskybox_top3.png',
  //     'skybox_bottom4.png',
  //     'skybox_front5.png',
  //     'skybox_back6.png'
  //   ] );


  camera = new THREE.PerspectiveCamera(45, width/height, 1, 25000);
  camera.position.set(500, 0, 12500);
  //z y x
  scene.add(camera);
  // scene.background({color:0x006994});

    scene.fog = new THREE.FogExp2( 0x000000, 0.00000025 );
    let dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( - 1, 0, 1 ).normalize();
    scene.add( dirLight );

// scene.fog( {color : 0x006994 , near : 1, far : 1000 })


//bubbles       
            
                var s = Math.random()*100;
                var geometry = new THREE.SphereBufferGeometry( s, s, s );
                var material = new THREE.MeshBasicMaterial( { color: 0x00688B, specular: 0xffffff, shininess: 50 } );
                for ( var i = 0; i < 2000; i ++ ) {
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

                // controls = new THREE.FlyControls( camera );
                // controls.movementSpeed = 1000;
                // controls.domElement = renderer.domElement;
                // controls.rollSpeed = Math.PI / 24;
                // controls.autoForward = false;
                // controls.dragToLook = false;


  document.body.appendChild(renderer.domElement);



}



  animate();
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);




 
camera.position.z-=10;

  controls.update();
}