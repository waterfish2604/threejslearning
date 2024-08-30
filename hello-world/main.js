import * as THREE from 'three';
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

//adding mesh to scence
scene.add(cube);

//settting camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.z=2;
scene.add(camera);

//renderer
const canvas = document.querySelector("canvas");
// console.log(canvas);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
