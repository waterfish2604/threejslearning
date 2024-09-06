import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


//create scene
const scenary = new THREE.Scene();

//ceating geometry and materail
const wall = new THREE.BoxGeometry(1,1,1);
const wallmat = new THREE.MeshBasicMaterial({
    color: 'brown'
})

const cementL = new THREE.BoxGeometry(1,1,1);
const cementM = new THREE.MeshBasicMaterial({
  color: 'white'
})

//creating mesh
const build0 = new THREE.Mesh(wall, wallmat);
build0.scale.set(2, 1.001, 1.001);

const build1 = new THREE.Mesh(wall, wallmat);
build1.scale.set(2, 1.001, 1.001);
build1.position.x= 2.1;

const build2 = new THREE.Mesh(wall, wallmat);
build2.scale.set(2, 1.001, 1.001);
build2.position.x=4.2;

// const build4 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build5 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build6 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build7 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build8 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build9 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build10 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build11 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build12 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build13 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build14 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build15 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build16 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build17 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build18 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build19 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

// const build20 = new THREE.Mesh(wall, wallmat);
// build.scale.set(2, 1, 1.01);

const cementSmallY0 = new THREE.Mesh(cementL, cementM);
cementSmallY0.position.x = 1;
cementSmallY0.scale.set(0.25,1,1);

const cementSmallY1 = new THREE.Mesh(cementL, cementM);
cementSmallY1.position.x = 3.2;
cementSmallY1.scale.set(0.25,1,1);

const cementSmallY2 = new THREE.Mesh(cementL, cementM);
cementSmallY2.position.x = 5.2;
cementSmallY2.scale.set(0.25,1,1);

const cementSmallX = new THREE.Mesh(cementL, cementM);
cementSmallX.position.y=0.62;
cementSmallX.position.x=4;
cementSmallX.scale.set(10,0.25,1);

//group of builds
const build = new THREE.Group();
build.add(build0);
build.add(build1);
build.add(build2);

const cementSmallYGroup = new THREE.Group();
cementSmallYGroup.add(cementSmallY0);
cementSmallYGroup.add(cementSmallY1);
cementSmallYGroup.add(cementSmallY2);

scenary.add(build);
scenary.add(cementSmallYGroup);
scenary.add(cementSmallX);

//camera and renderer
const aspectRatio = window.innerWidth/window.innerHeight;
const cam = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 300);

cam.position.z = 15;
cam.position.y = 5;
cam.position.x = 5;
scenary.add(cam);

const board = document.querySelector(".canvas-to-draw")

const render = new THREE.WebGLRenderer({
    canvas: board,
    antialias: true
})
render.setSize(window.innerWidth, window.innerHeight);

const control = new OrbitControls(cam, board);

const axis = new THREE.AxesHelper(10);
scenary.add(axis);

window.addEventListener('resize', ()=> {
    render.setSize(window.innerWidth, window.innerHeight);
    cam.aspect=window.innerWidth/window.innerHeight;
    cam.updateProjectionMatrix();
  })

const renderloop = () => {
    control.update();
    render.render(scenary, cam);
    window.requestAnimationFrame(renderloop);
  }
  
  renderloop()

