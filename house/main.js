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

const pillarG = new THREE.BoxGeometry(1,1,1);
const pillarM = new THREE.MeshBasicMaterial({
  color: 'grey'
})

const groundG = new THREE.BoxGeometry(1,1,1);
const groundM = new THREE.MeshBasicMaterial({
  color: 'green'
})

//creating mesh
const build0 = new THREE.Mesh(wall, wallmat);
build0.scale.set(2, 1.01, 1.01);

const build1 = new THREE.Mesh(wall, wallmat);
build1.scale.set(2, 1.01, 1.01);
build1.position.x= 2.1;

const build2 = new THREE.Mesh(wall, wallmat);
build2.scale.set(2, 1.01, 1.01);
build2.position.x=4.2;

const build3 = new THREE.Mesh(wall, wallmat);
build3.scale.set(2, 1.01, 1.01);
build3.position.x=6.3;

const build4 = new THREE.Mesh(wall, wallmat);
build4.scale.set(2, 1.01, 1.01);
build4.position.x=8.4;

const build5 = new THREE.Mesh(wall, wallmat);
build5.scale.set(2, 1, 1.01);
build5.position.x=-1;
build5.position.y=1.25

const build6 = new THREE.Mesh(wall, wallmat);
build6.scale.set(2, 1, 1.01);
build6.position.y=1.25;
build6.position.x=1.25;

const build7 = new THREE.Mesh(wall, wallmat);
build7.scale.set(2, 1, 1.01);
build7.position.y=1.25;
build7.position.x=3.5;

const build8 = new THREE.Mesh(wall, wallmat);
build8.scale.set(2, 1, 1.01);
build8.position.y=1.25;
build8.position.x=5.75;

const build9 = new THREE.Mesh(wall, wallmat);
build9.scale.set(2, 1, 1.01);
build9.position.y=1.25;
build9.position.x=8;

const build10 = new THREE.Mesh(wall, wallmat);
build10.scale.set(2, 1, 1.01);
build10.position.y=1.25;
build10.position.x=10.25;

const build11 = new THREE.Mesh(wall, wallmat);
build11.scale.set(2, 1, 1.01);
build11.position.y=2.5;

const build12 = new THREE.Mesh(wall, wallmat);
build12.scale.set(2, 1, 1.01);
build12.position.y=2.5;
build12.position.x=2.25;

const build13 = new THREE.Mesh(wall, wallmat);
build13.scale.set(2, 1, 1.01);
build13.position.y=2.5;
build13.position.x=4.5;

const build14 = new THREE.Mesh(wall, wallmat);
build14.scale.set(2, 1, 1.01);
build14.position.y=2.5;
build14.position.x=6.75;

const build15 = new THREE.Mesh(wall, wallmat);
build15.scale.set(2, 1, 1.01);
build15.position.y=2.5;
build15.position.x=9;

const build16 = new THREE.Mesh(wall, wallmat);
build16.scale.set(2, 1, 1.01);
build16.position.y=3.75;
build16.position.x=-1;

const build17 = new THREE.Mesh(wall, wallmat);
build17.scale.set(2, 1, 1.01);
build17.position.y=3.75;
build17.position.x=1.25;

const build18 = new THREE.Mesh(wall, wallmat);
build18.scale.set(2, 1, 1.01);
build18.position.y=3.75;
build18.position.x=3.5;

const build19 = new THREE.Mesh(wall, wallmat);
build19.scale.set(2, 1, 1.01);
build19.position.y=3.75;
build19.position.x=5.75;

const build20 = new THREE.Mesh(wall, wallmat);
build20.scale.set(2, 1, 1.01);
build20.position.y=3.75;
build20.position.x=8;

const build21 = new THREE.Mesh(wall, wallmat);
build21.scale.set(2, 1, 1.01);
build21.position.y=3.75;
build21.position.x=10.25;

const build22 = new THREE.Mesh(wall, wallmat);
build22.scale.set(2, 1, 1.01);
build22.position.y=5;

const build23 = new THREE.Mesh(wall, wallmat);
build23.scale.set(2, 1, 1.01);
build23.position.y=5;
build23.position.x=2.25;

const build24 = new THREE.Mesh(wall, wallmat);
build24.scale.set(2, 1, 1.01);
build24.position.y=5;
build24.position.x=4.5;

const build25 = new THREE.Mesh(wall, wallmat);
build25.scale.set(2, 1, 1.01);
build25.position.y=5;
build25.position.x=6.75;

const build26 = new THREE.Mesh(wall, wallmat);
build26.scale.set(2, 1, 1.01);
build26.position.y=5;
build26.position.x=9;

const build27 = new THREE.Mesh(wall, wallmat);
build27.scale.set(2, 1, 1.01);
build27.position.y=6.25;
build27.position.x=-1;

const build28 = new THREE.Mesh(wall, wallmat);
build28.scale.set(2, 1, 1.01);
build28.position.y=6.25;
build28.position.x=1.25;

const build29 = new THREE.Mesh(wall, wallmat);
build29.scale.set(2, 1, 1.01);
build29.position.y=6.25;
build29.position.x=3.5;

const build30 = new THREE.Mesh(wall, wallmat);
build30.scale.set(2, 1, 1.01);
build30.position.y=6.25;
build30.position.x=5.75;

const build31 = new THREE.Mesh(wall, wallmat);
build31.scale.set(2, 1, 1.01);
build31.position.y=6.25;
build31.position.x=8;

// const build32 = new THREE.Mesh(wall, wallmat);
// build32.scale.set(2, 1, 1.01);
// build32.position.y=6.25;
// build32.position.x=-1;

// pillars
const pillar0 = new THREE.Mesh(pillarG, pillarM);
pillar0.scale.set(2.01, 11, 2);
pillar0.position.y=5;
pillar0.position.x=-2

// const pillar0 = new THREE.Mesh(pillarG, pillarM);
// pillar0.scale.set(2, 11, 2);
// pillar0.position.y=5;
// pillar0.position.x=-2

// const pillar0 = new THREE.Mesh(pillarG, pillarM);
// pillar0.scale.set(2, 11, 2);
// pillar0.position.y=5;
// pillar0.position.x=-2

// const pillar0 = new THREE.Mesh(pillarG, pillarM);
// pillar0.scale.set(2, 11, 2);
// pillar0.position.y=5;
// pillar0.position.x=-2

// const pillar0 = new THREE.Mesh(pillarG, pillarM);
// pillar0.scale.set(2, 11, 2);
// pillar0.position.y=5;
// pillar0.position.x=-2

// ground
const ground = new THREE.Mesh(groundG, groundM);
ground.scale.set(15, 0.5, 15);
ground.position.y=-0.75;
ground.position.x=4;
ground.position.z=5;


// white sticky substance
const cementSmallY0 = new THREE.Mesh(cementL, cementM);
cementSmallY0.position.x = 3.5;
cementSmallY0.position.y=4.5;
cementSmallY0.scale.set(13,10,1);

const cementSmallY2 = new THREE.Mesh(cementL, cementM);
cementSmallY2.position.x = 3.1;

cementSmallY2.scale.set(0.25,1,1);

const cementSmallY3 = new THREE.Mesh(cementL, cementM);
cementSmallY3.position.x = 7.3;
cementSmallY3.scale.set(0.25,1,1);

const cementSmallX = new THREE.Mesh(cementL, cementM);
cementSmallX.position.y=0.62;
cementSmallX.position.x=4.25;
cementSmallX.scale.set(10.5,0.25,1);

//groups
const build = new THREE.Group();
build.add(build0);
build.add(build1);
build.add(build2);
build.add(build3);
build.add(build4);
build.add(build5);
build.add(build6);
build.add(build7);
build.add(build8);
build.add(build9);
build.add(build10);
build.add(build11);
build.add(build12);
build.add(build13);
build.add(build14);
build.add(build15);
build.add(build16);
build.add(build17);
build.add(build18);
build.add(build19);
build.add(build20);
build.add(build21);
build.add(build22);
build.add(build23);
build.add(build24);
build.add(build25);
build.add(build26);
build.add(build27);
build.add(build28);
build.add(build29);
build.add(build30);
build.add(build31);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);
// build.add(build20);



const cementSmallYGroup = new THREE.Group();
cementSmallYGroup.add(cementSmallY0);
// cementSmallYGroup.add(cementSmallY1);
// cementSmallYGroup.add(cementSmallY2);
// cementSmallYGroup.add(cementSmallY3);

const pillarGroup = new THREE.Group();
pillarGroup.add(pillar0);


scenary.add(ground);
scenary.add(build);
scenary.add(cementSmallYGroup);
scenary.add(cementSmallX);
scenary.add(pillarGroup);

//camera and renderer
const aspectRatio = window.innerWidth/window.innerHeight;
const cam = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 300);

cam.position.z = 17;
cam.position.y = 15;
cam.position.x = 15;
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

control.autoRotate = true;

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

