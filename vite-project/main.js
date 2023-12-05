import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Creo la 1ra caja
const caja1Geometry = new THREE.BoxGeometry(3.2, 2, 3); // Width, Height, Depth
const cajaMaterial = new THREE.MeshStandardMaterial({
  color: "#dad2c5",
  roughness: 0.5, // Adjust roughness
  metalness: 0, // Adjust metalness
});
const caja1 = new THREE.Mesh(caja1Geometry, cajaMaterial);
caja1.position.set(0, 0, 0);
scene.add(caja1);

// Creo la 2da caja
const caja2Geometry = new THREE.BoxGeometry(2.2, 2, 1.5); 
const caja2 = new THREE.Mesh(caja2Geometry, cajaMaterial);
caja2.position.set(0,0,2)
scene.add(caja2)

// Escalones Puerta Principal
const escalonCortoGeometry1 = new THREE.BoxGeometry(1.7, 0.05, 1)  // Width, Height, Depth
const escalonMaterial = new THREE.MeshStandardMaterial({
  color: "#7c7d78",
  roughness: 0.5, // Adjust roughness
  metalness: 0.1, // Adjust metalness
});
const escalon1 = new THREE.Mesh(escalonCortoGeometry1, escalonMaterial);
escalon1.position.set(0, -0.705, 2.75);
scene.add(escalon1);

const escalonCortoGeometry2 = new THREE.BoxGeometry(1.8, 0.05, 1)
const escalon2 = new THREE.Mesh(escalonCortoGeometry2, escalonMaterial)
escalon2.position.set(0,-0.755,2.85);
scene.add(escalon2);

const escalonCortoGeometry3 = new THREE.BoxGeometry(1.9, 0.05, 1)
const escalon3 = new THREE.Mesh(escalonCortoGeometry3, escalonMaterial)
escalon3.position.set(0,-0.805,2.95);
scene.add(escalon3);

const escalonCortoGeometry4 = new THREE.BoxGeometry(2, 0.05, 1)
const escalon4 = new THREE.Mesh(escalonCortoGeometry4, escalonMaterial)
escalon4.position.set(0,-0.855,3.05);
scene.add(escalon4);

const escalonCortoGeometry5 = new THREE.BoxGeometry(2.1, 0.05, 1)
const escalon5 = new THREE.Mesh(escalonCortoGeometry5, escalonMaterial)
escalon5.position.set(0,-0.905,3.15);
scene.add(escalon5);

const escalonCortoGeometry6 = new THREE.BoxGeometry(2.2, 0.05, 1)
const escalon6 = new THREE.Mesh(escalonCortoGeometry6, escalonMaterial)
escalon6.position.set(0,-0.955,3.25);
scene.add(escalon6);

// Columnas izquierda

const columnaGeometry = new THREE.CylinderGeometry(0.06, 0.06, 1.95, 16); // R top, R bot, H, R Seg
const columna1 = new THREE.Mesh(columnaGeometry, cajaMaterial);
columna1.position.set(-1, 0, 3.7);
scene.add(columna1);

const columna2 = new THREE.Mesh(columnaGeometry, cajaMaterial);
columna2.position.set(-0.8, 0, 3.7);
scene.add(columna2);

const baseColumnaGeometry = new THREE.BoxGeometry(0.22, 0.16, 0.16);  // Width, Height, Depth
const baseColumna1 = new THREE.Mesh(baseColumnaGeometry, cajaMaterial);
baseColumna1.position.set(-1, -0.9, 3.7);
scene.add(baseColumna1);

const baseColumna2 = new THREE.Mesh(baseColumnaGeometry, cajaMaterial);
baseColumna2.position.set(-0.8, -0.9, 3.7);
scene.add(baseColumna2);

// Detalles Columna Izquierda

// Primera Columna 
const torusGeometry = new THREE.TorusGeometry(0.067, 0.012, 16, 50); // R, tube R, 
const torus = new THREE.Mesh(torusGeometry, cajaMaterial);
torus.position.set(-1, -0.81, 3.7);
torus.rotation.x = Math.PI / 2;
scene.add(torus);

const torusSmallGeometry = new THREE.TorusGeometry(0.0652, 0.0062, 16, 50); // R, tube R, 
const torusSmall = new THREE.Mesh(torusSmallGeometry, cajaMaterial);
torusSmall.position.set(-1, -0.792, 3.7);
torusSmall.rotation.x = Math.PI / 2;
scene.add(torusSmall);

//Segunda Columna
const torus1 = new THREE.Mesh(torusGeometry, cajaMaterial);
torus1.position.set(-0.8, -0.81, 3.7);
torus1.rotation.x = Math.PI / 2;
scene.add(torus1);

const torusSmall1 = new THREE.Mesh(torusSmallGeometry, cajaMaterial);
torusSmall1.position.set(-0.8, -0.792, 3.7);
torusSmall1.rotation.x = Math.PI / 2;
scene.add(torusSmall1);

// Columnas derecha

const columna3 = new THREE.Mesh(columnaGeometry, cajaMaterial);
columna3.position.set(1, 0, 3.7);
scene.add(columna3);

const columna4 = new THREE.Mesh(columnaGeometry, cajaMaterial);
columna4.position.set(0.8, 0, 3.7);
scene.add(columna4);

const baseColumna3 = new THREE.Mesh(baseColumnaGeometry, cajaMaterial);
baseColumna3.position.set(1, -0.9, 3.7);
scene.add(baseColumna3);

const baseColumna4 = new THREE.Mesh(baseColumnaGeometry, cajaMaterial);
baseColumna4.position.set(0.8, -0.9, 3.7);
scene.add(baseColumna4);

// Detalles Columna Derecha

const torus2 = new THREE.Mesh(torusGeometry, cajaMaterial);
torus2.position.set(0.8, -0.81, 3.7);
torus2.rotation.x = Math.PI / 2;
scene.add(torus2);

const torusSmall2 = new THREE.Mesh(torusSmallGeometry, cajaMaterial);
torusSmall2.position.set(0.8, -0.792, 3.7);
torusSmall2.rotation.x = Math.PI / 2;
scene.add(torusSmall2);

const torus3 = new THREE.Mesh(torusGeometry, cajaMaterial);
torus3.position.set(1, -0.81, 3.7);
torus3.rotation.x = Math.PI / 2;
scene.add(torus3);

const torusSmall3 = new THREE.Mesh(torusSmallGeometry, cajaMaterial);
torusSmall3.position.set(1, -0.792, 3.7);
torusSmall3.rotation.x = Math.PI / 2;
scene.add(torusSmall3);

// Columnas centrales

const columna5 = new THREE.Mesh(columnaGeometry, cajaMaterial);
columna5.position.set(0.3, 0, 3.7);
scene.add(columna5);

const columna6 = new THREE.Mesh(columnaGeometry, cajaMaterial);
columna6.position.set(-0.3, 0, 3.7);
scene.add(columna6);

const baseColumna5 = new THREE.Mesh(baseColumnaGeometry, cajaMaterial);
baseColumna5.position.set(0.3, -0.9, 3.7);
scene.add(baseColumna5);

const baseColumna6 = new THREE.Mesh(baseColumnaGeometry, cajaMaterial);
baseColumna6.position.set(-0.3, -0.9, 3.7);
scene.add(baseColumna6);

// Detalles Columna Centrales
const torus4 = new THREE.Mesh(torusGeometry, cajaMaterial);
torus4.position.set(0.3, -0.81, 3.7);
torus4.rotation.x = Math.PI / 2;
scene.add(torus4);
const torusSmall4 = new THREE.Mesh(torusSmallGeometry, cajaMaterial);
torusSmall4.position.set(0.3, -0.792, 3.7);
torusSmall4.rotation.x = Math.PI / 2;
scene.add(torusSmall4);
const torus5 = new THREE.Mesh(torusGeometry, cajaMaterial);
torus5.position.set(-0.3, -0.81, 3.7);
torus5.rotation.x = Math.PI / 2;
scene.add(torus5);
const torusSmall5 = new THREE.Mesh(torusSmallGeometry, cajaMaterial);
torusSmall5.position.set(-0.3, -0.792, 3.7);
torusSmall5.rotation.x = Math.PI / 2;
scene.add(torusSmall5);



// Light
const light = new THREE.PointLight(0xffffff, 1, 10);
light.position.set(0, -1, 5);
scene.add(light);

// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 2.5) // Adjust ambient light
scene.add(ambientLight);

// Camera
const camera = new THREE.PerspectiveCamera(50, 1500 / 800);
camera.position.x = -2;
camera.position.y = 1;
camera.position.z = 8;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(1500, 800);

// Set background color
renderer.setClearColor("#dbe5ee"); // Use any valid CSS color value

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
//controls.maxPolarAngle = Math.PI / 2;

// Animation loop
function animate() {
  // Update controls
  controls.update();

  // Render the scene with the updated camera and cube position
  renderer.render(scene, camera);

  // Call animate again on the next frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
