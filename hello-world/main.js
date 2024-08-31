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
console.log(cubeM);

//mesh
const cube = new THREE.Mesh(cubeG, cubeM);

//adding mesh to scence
scene.add(cube);

//settting camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.z=5;
scene.add(camera);

//renderer
const canvas = document.querySelector("canvas");
// console.log(canvas);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

//orbit controller
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;
control.autoRotate = true;


//making the renderloop
const renderloop = () => {
  control.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop()
