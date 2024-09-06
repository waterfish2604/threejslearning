import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


//create scene
const scenary = new THREE.Scene();

//ceating geometry and materail
const wall = new THREE.BoxGeometry(1,1,1);
const wallmat = new THREE.MeshBasicMaterial({
    color: 'brown'
})

//creating mesh
const build = new THREE.Mesh(wall, wallmat);


scenary.add(build);

//camera and renderer
const aspectRatio = window.innerWidth/window.innerHeight;
const cam = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 300);

cam.position.z = 15;
cam.position.y = 5;
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

