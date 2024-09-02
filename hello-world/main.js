import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
// console.log(OrbitControls);
//console.log(THREE);

//creating a scene
const scene = new THREE.Scene();

//geometry and mat than go in mesh
const cubeG = new THREE.BoxGeometry(1,1,1);
const cubeM = new THREE.MeshBasicMaterial({
  color: "aqua"
});


//mesh
const cube = new THREE.Mesh(cubeG, cubeM);
// cube.position.x = 2;
// cube.position.y = 1;
console.log(cube);

//adding mesh to scence
scene.add(cube);

const aspectRatio = window.innerWidth/window.innerHeight;

//settting camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 100);

//Orthographix camera

// const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, 1, -1, 0.1, 100);
camera.position.z=5;
scene.add(camera);

//renderer
const canvas = document.querySelector("canvas");
// console.log(canvas);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

//axishelper
const axishelper = new THREE.AxesHelper(5);
scene.add(axishelper);


//orbit controller
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;
control.autoRotate = true;

window.addEventListener('resize', ()=> {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
})


//making the renderloop
const renderloop = () => {
  control.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop()
