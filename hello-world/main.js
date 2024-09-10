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

const circleG = new THREE.CircleGeometry(1,32,1 , Math.PI);
const circleM = new THREE.MeshBasicMaterial({
  color: "yellow",
  side: THREE.DoubleSide
});

const standG = new THREE.BoxGeometry(1,1,1);
const standM = new THREE.MeshBasicMaterial({
  color: 'darkgrey'
})

const bufferG = new THREE.SphereGeometry(1, 32, 16);
const bufferM = new THREE.MeshBasicMaterial({
  color: "grey"
})

const nozzleG = new THREE.CylinderGeometry(0.4, 0.4, 2, 32, 1);
const nozzleM = new THREE.MeshBasicMaterial({
  color: "#71797E"
})


//mesh
const cube = new THREE.Mesh(cubeG, cubeM);
const cube1 = new THREE.Mesh(cubeG, cubeM);
cube1.position.x = 2;
const cube2 = new THREE.Mesh(cubeG, cubeM);
cube2.position.x = 4
// cube.position.x = 2;
// cube.position.y = 1;
// console.log(cube);
const circle = new THREE.Mesh(circleG, circleM);
circle.position.y=3;

const stand = new THREE.Mesh(standG, standM);
stand.scale.set(2,2,2);
const buffer = new THREE.Mesh(bufferG, bufferM);
buffer.position.y=1.5;
const nozzle = new THREE.Mesh(nozzleG, nozzleM);
nozzle.position.y=1.5;
nozzle.position.z=1;



const group = new THREE.Group();
const cannon = new THREE.Group();
// cannon.add(stand);
cannon.add(buffer);
cannon.add(nozzle);
group.add(cube);
group.add(cube1);
group.add(cube2);

// scene.add(group);
// scene.add(circle);
scene.add(cannon);
scene.add(stand);

//adding mesh to scence
// scene.add(cube);
// scene.add(cube1);
// scene.add(cube2);

const aspectRatio = window.innerWidth/window.innerHeight;

//settting camera
const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 100);

//Orthographix camera

// const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, 1, -1, 0.1, 100);
camera.position.z=15;
camera.position.y=6;
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
const axishelper = new THREE.AxesHelper(10);
scene.add(axishelper);


//orbit controller
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;
control.autoRotate = false;
control.rotateSpeed = 3.5;

window.addEventListener('resize', ()=> {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
})


const clock = new THREE.Clock();

//making the renderloop
const renderloop = () => {
  let ti = clock.getDelta()
  const time = clock.getElapsedTime();
  cannon.rotateY(Math.PI/4*ti);
  nozzle.position.set(0,1.65,0.75);
  nozzle.rotation.x=Math.PI/2 + (Math.sin(time) * Math.PI/18);
  control.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop()
