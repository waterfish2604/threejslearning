import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//create scene
const scenary = new THREE.Scene();

//ceating geometry and materail
const wall = new THREE.BoxGeometry(1, 1, 1);
const wallmat = new THREE.MeshBasicMaterial({
  color: 'brown'
})

const cementL = new THREE.BoxGeometry(1, 1, 1);
const cementM = new THREE.MeshBasicMaterial({
  color: 'white'
})

const pillarG = new THREE.BoxGeometry(1, 1, 1);
const pillarM = new THREE.MeshBasicMaterial({
  color: 'grey'
})

const groundG = new THREE.BoxGeometry(1, 1, 1);
const groundM = new THREE.MeshBasicMaterial({
  color: 'green'
})

//creating mesh
const build0 = new THREE.Mesh(wall, wallmat);
build0.scale.set(2, 1.01, 1.01);

const build1 = new THREE.Mesh(wall, wallmat);
build1.scale.set(2, 1.01, 1.01);
build1.position.x = 2.25;

const build2 = new THREE.Mesh(wall, wallmat);
build2.scale.set(2, 1.01, 1.01);
build2.position.x = 4.5;

const build3 = new THREE.Mesh(wall, wallmat);
build3.scale.set(2, 1.01, 1.01);
build3.position.x = 6.75;

const build4 = new THREE.Mesh(wall, wallmat);
build4.scale.set(2, 1.01, 1.01);
build4.position.x = 9;

const build5 = new THREE.Mesh(wall, wallmat);
build5.scale.set(2, 1, 1.01);
build5.position.x = -1;
build5.position.y = 1.25

const build6 = new THREE.Mesh(wall, wallmat);
build6.scale.set(2, 1, 1.01);
build6.position.y = 1.25;
build6.position.x = 1.25;

const build7 = new THREE.Mesh(wall, wallmat);
build7.scale.set(2, 1, 1.01);
build7.position.y = 1.25;
build7.position.x = 3.5;

const build8 = new THREE.Mesh(wall, wallmat);
build8.scale.set(2, 1, 1.01);
build8.position.y = 1.25;
build8.position.x = 5.75;

const build9 = new THREE.Mesh(wall, wallmat);
build9.scale.set(2, 1, 1.01);
build9.position.y = 1.25;
build9.position.x = 8;

const build10 = new THREE.Mesh(wall, wallmat);
build10.scale.set(2, 1, 1.01);
build10.position.y = 1.25;
build10.position.x = 10.25;

const build11 = new THREE.Mesh(wall, wallmat);
build11.scale.set(2, 1, 1.01);
build11.position.y = 2.5;

const build12 = new THREE.Mesh(wall, wallmat);
build12.scale.set(2, 1, 1.01);
build12.position.y = 2.5;
build12.position.x = 2.25;

const build13 = new THREE.Mesh(wall, wallmat);
build13.scale.set(2, 1, 1.01);
build13.position.y = 2.5;
build13.position.x = 4.5;

const build14 = new THREE.Mesh(wall, wallmat);
build14.scale.set(2, 1, 1.01);
build14.position.y = 2.5;
build14.position.x = 6.75;

const build15 = new THREE.Mesh(wall, wallmat);
build15.scale.set(2, 1, 1.01);
build15.position.y = 2.5;
build15.position.x = 9;

const build16 = new THREE.Mesh(wall, wallmat);
build16.scale.set(2, 1, 1.01);
build16.position.y = 3.75;
build16.position.x = -1;

const build17 = new THREE.Mesh(wall, wallmat);
build17.scale.set(2, 1, 1.01);
build17.position.y = 3.75;
build17.position.x = 1.25;

const build18 = new THREE.Mesh(wall, wallmat);
build18.scale.set(2, 1, 1.01);
build18.position.y = 3.75;
build18.position.x = 3.5;

const build19 = new THREE.Mesh(wall, wallmat);
build19.scale.set(2, 1, 1.01);
build19.position.y = 3.75;
build19.position.x = 5.75;

const build20 = new THREE.Mesh(wall, wallmat);
build20.scale.set(2, 1, 1.01);
build20.position.y = 3.75;
build20.position.x = 8;

const build21 = new THREE.Mesh(wall, wallmat);
build21.scale.set(2, 1, 1.01);
build21.position.y = 3.75;
build21.position.x = 10.25;

const build22 = new THREE.Mesh(wall, wallmat);
build22.scale.set(2, 1, 1.01);
build22.position.y = 5;

const build23 = new THREE.Mesh(wall, wallmat);
build23.scale.set(2, 1, 1.01);
build23.position.y = 5;
build23.position.x = 2.25;

const build24 = new THREE.Mesh(wall, wallmat);
build24.scale.set(2, 1, 1.01);
build24.position.y = 5;
build24.position.x = 4.5;

const build25 = new THREE.Mesh(wall, wallmat);
build25.scale.set(2, 1, 1.01);
build25.position.y = 5;
build25.position.x = 6.75;

const build26 = new THREE.Mesh(wall, wallmat);
build26.scale.set(2, 1, 1.01);
build26.position.y = 5;
build26.position.x = 9;

const build27 = new THREE.Mesh(wall, wallmat);
build27.scale.set(2, 1, 1.01);
build27.position.y = 6.25;
build27.position.x = -1;

const build28 = new THREE.Mesh(wall, wallmat);
build28.scale.set(2, 1, 1.01);
build28.position.y = 6.25;
build28.position.x = 1.25;

const build29 = new THREE.Mesh(wall, wallmat);
build29.scale.set(2, 1, 1.01);
build29.position.y = 6.25;
build29.position.x = 3.5;

const build30 = new THREE.Mesh(wall, wallmat);
build30.scale.set(2, 1, 1.01);
build30.position.y = 6.25;
build30.position.x = 5.75;

const build31 = new THREE.Mesh(wall, wallmat);
build31.scale.set(2, 1, 1.01);
build31.position.y = 6.25;
build31.position.x = 8;

const build32 = new THREE.Mesh(wall, wallmat);
build32.scale.set(2, 1, 1.01);
build32.position.y = 6.25;
build32.position.x = 10.25;

const build33 = new THREE.Mesh(wall, wallmat);
build33.scale.set(2, 1, 1.01);
build33.position.y = 7.5;

const build34 = new THREE.Mesh(wall, wallmat);
build34.scale.set(2, 1, 1.01);
build34.position.y = 7.5;
build34.position.x = 2.25;

const build35 = new THREE.Mesh(wall, wallmat);
build35.scale.set(2, 1, 1.01);
build35.position.y = 7.5;
build35.position.x = 4.5;

const build36 = new THREE.Mesh(wall, wallmat);
build36.scale.set(2, 1, 1.01);
build36.position.y = 7.5;
build36.position.x = 6.75;

const build37 = new THREE.Mesh(wall, wallmat);
build37.scale.set(2, 1, 1.01);
build37.position.y = 7.5;
build37.position.x = 9;

const build38 = new THREE.Mesh(wall, wallmat);
build38.scale.set(2, 1, 1.01);
build38.position.y = 8.75;
build38.position.x = -1.25;

const build39 = new THREE.Mesh(wall, wallmat);
build39.scale.set(2, 1, 1.01);
build39.position.y = 8.75;
build39.position.x = 1;

const build40 = new THREE.Mesh(wall, wallmat);
build40.scale.set(2, 1, 1.01);
build40.position.y = 8.75;
build40.position.x = 3.25;

const build41 = new THREE.Mesh(wall, wallmat);
build41.scale.set(2, 1, 1.01);
build41.position.y = 8.75;
build41.position.x = 5.5;

const build42 = new THREE.Mesh(wall, wallmat);
build42.scale.set(2, 1, 1.01);
build42.position.y = 8.75;
build42.position.x = 7.75;

const build43 = new THREE.Mesh(wall, wallmat);
build43.scale.set(2, 1, 1.01);
build43.position.y = 8.75;
build43.position.x = 10;

const brickOnNegX0 = new THREE.Mesh(wall, wallmat);
brickOnNegX0.scale.set(1.01, 1, 2);
brickOnNegX0.position.set(-2, 0, 2);

const brickOnNegX1 = brickOnNegX0.clone();
brickOnNegX1.position.set(-2, 0, 4.25);

const brickOnNegX2 = brickOnNegX0.clone();
brickOnNegX2.position.set(-2, 0, 6.5);

const brickOnNegX3 = brickOnNegX0.clone();
brickOnNegX3.position.set(-2, 0, 8.75);

const brickOnNegX4 = brickOnNegX0.clone();
brickOnNegX4.position.set(-2, 0, 11);

const brickOnNegX5 = brickOnNegX0.clone();
brickOnNegX5.position.set(-2, 1.25, 1);

const brickOnNegX6 = brickOnNegX0.clone();
brickOnNegX6.position.set(-2, 1.25, 3.25);

const brickOnNegX7 = brickOnNegX0.clone();
brickOnNegX7.position.set(-2, 1.25, 5.5);

const brickOnNegX8 = brickOnNegX0.clone();
brickOnNegX8.position.set(-2, 1.25, 7.75);

const brickOnNegX9 = brickOnNegX0.clone();
brickOnNegX9.position.set(-2, 1.25, 10);

const brickOnNegX10 = brickOnNegX0.clone();
brickOnNegX10.position.set(-2, 1.25, 12.25);

// // Reset Y and Z after the second set of 5
const brickOnNegX11 = brickOnNegX0.clone();
brickOnNegX11.position.set(-2, 2.5, 2);

const brickOnNegX12 = brickOnNegX0.clone();
brickOnNegX12.position.set(-2, 2.5, 4.25);

const brickOnNegX13 = brickOnNegX0.clone();
brickOnNegX13.position.set(-2, 2.5, 6.5);

const brickOnNegX14 = brickOnNegX0.clone();
brickOnNegX14.position.set(-2, 2.5, 8.75);

const brickOnNegX15 = brickOnNegX0.clone();
brickOnNegX15.position.set(-2, 2.5, 11);

// // Reset Y and Z after the third set of 5
const brickOnNegX16 = brickOnNegX0.clone();
brickOnNegX16.position.set(-2,  3.75, 1);

const brickOnNegX17 = brickOnNegX0.clone();
brickOnNegX17.position.set(-2,  3.75, 3.25);

const brickOnNegX18 = brickOnNegX0.clone();
brickOnNegX18.position.set(-2,  3.75, 5.5);

const brickOnNegX19 = brickOnNegX0.clone();
brickOnNegX19.position.set(-2, 3.75, 7.75);

const brickOnNegX20 = brickOnNegX0.clone();
brickOnNegX20.position.set(-2,  3.75, 10);

// // Reset Y and Z after the fourth set of 5
const brickOnNegX21 = brickOnNegX0.clone();
brickOnNegX21.position.set(-2, 3.75, 12.25);

const brickOnNegX22 = brickOnNegX0.clone();
brickOnNegX22.position.set(-2, 5, 2);

const brickOnNegX23 = brickOnNegX0.clone();
brickOnNegX23.position.set(-2, 5, 4.25);

const brickOnNegX24 = brickOnNegX0.clone();
brickOnNegX24.position.set(-2, 5, 6.5);

const brickOnNegX25 = brickOnNegX0.clone();
brickOnNegX25.position.set(-2, 5, 8.75);

// // Reset Y and Z after the fifth set of 5
const brickOnNegX26 = brickOnNegX0.clone();
brickOnNegX26.position.set(-2, 5, 11);

const brickOnNegX27 = brickOnNegX0.clone();
brickOnNegX27.position.set(-2, 6.25, 1);

const brickOnNegX28 = brickOnNegX0.clone();
brickOnNegX28.position.set(-2, 6.25, 3.25);

const brickOnNegX29 = brickOnNegX0.clone();
brickOnNegX29.position.set(-2, 6.25, 5.5);

const brickOnNegX30 = brickOnNegX0.clone();
brickOnNegX30.position.set(-2, 6.25, 7.75);

// // Reset Y and Z after the sixth set of 5
const brickOnNegX31 = brickOnNegX0.clone();
brickOnNegX31.position.set(-2, 6.25, 10);

const brickOnNegX32 = brickOnNegX0.clone();
brickOnNegX32.position.set(-2, 6.25, 12.25);

const brickOnNegX33 = brickOnNegX0.clone();
brickOnNegX33.position.set(-2, 7.5, 2);

const brickOnNegX34 = brickOnNegX0.clone();
brickOnNegX34.position.set(-2, 7.5, 4.25);

const brickOnNegX35 = brickOnNegX0.clone();
brickOnNegX35.position.set(-2, 7.5, 6.5);

// // Reset Y and Z after the seventh set of 5
const brickOnNegX36 = brickOnNegX0.clone();
brickOnNegX36.position.set(-2, 7.5, 8.75);

const brickOnNegX37 = brickOnNegX0.clone();
brickOnNegX37.position.set(-2, 7.5, 11);

const brickOnNegX38 = brickOnNegX0.clone();
brickOnNegX38.position.set(-2, 8.75, 1);

const brickOnNegX39 = brickOnNegX0.clone();
brickOnNegX39.position.set(-2, 8.75, 3.25);

const brickOnNegX40 = brickOnNegX0.clone();
brickOnNegX40.position.set(-2, 8.75, 5.5);

// // Reset Y and Z after the eighth set of 5
const brickOnNegX41 = brickOnNegX0.clone();
brickOnNegX41.position.set(-2, 8.75, 7.75);

const brickOnNegX42 = brickOnNegX0.clone();
brickOnNegX42.position.set(-2, 8.75, 10);

const brickOnNegX43 = brickOnNegX0.clone();
brickOnNegX43.position.set(-2, 8.75, 12.25);


// pillars
const pillar0 = new THREE.Mesh(pillarG, pillarM);
pillar0.scale.set(2.01, 11, 2.01);
pillar0.position.y = 5;
pillar0.position.x = -2

const pillar1 = new THREE.Mesh(pillarG, pillarM);
pillar1.scale.set(2, 11, 2.01);
pillar1.position.y = 5;
pillar1.position.x = 10.5;

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
ground.scale.set(17, 0.5, 17);
ground.position.y = -0.75;
ground.position.x = 4.25;
ground.position.z = 6.5;


// white sticky substance
const cementWallY0 = new THREE.Mesh(cementL, cementM);
cementWallY0.position.x = 3.5;
cementWallY0.position.y = 4.25;
cementWallY0.scale.set(13, 9.99, 1);

const cementWallY1 = new THREE.Mesh(cementL, cementM);
cementWallY1.scale.set(1, 9.99, 13.001);
cementWallY1.position.z=5.5;
cementWallY1.position.x=-2;
cementWallY1.position.y=4.25;

const cementWallY2 = new THREE.Mesh(cementL, cementM);
cementWallY2.position.x =10.5;
cementWallY2.scale.set(1, 9.99, 13);
cementWallY2.position.z=5.5;
cementWallY2.position.y=4.25;


const cementWallX = new THREE.Mesh(cementL, cementM);
cementWallX.position.y = 0.62;
cementWallX.position.x = 4.25;
cementWallX.scale.set(10.5, 0.25, 1);

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
build.add(build32);
build.add(build33);
build.add(build34);
build.add(build35);
build.add(build36);
build.add(build37);
build.add(build38);
build.add(build39);
build.add(build40);
build.add(build41);
build.add(build42);
build.add(build43);

build.add(brickOnNegX0);
build.add(brickOnNegX1);
build.add(brickOnNegX2);
build.add(brickOnNegX3);
build.add(brickOnNegX4);
build.add(brickOnNegX5);
build.add(brickOnNegX6);
build.add(brickOnNegX7);
build.add(brickOnNegX8);
build.add(brickOnNegX9);
build.add(brickOnNegX10);
build.add(brickOnNegX11);
build.add(brickOnNegX12);
build.add(brickOnNegX13);
build.add(brickOnNegX14);
build.add(brickOnNegX15);
build.add(brickOnNegX16);
build.add(brickOnNegX17);
build.add(brickOnNegX18);
build.add(brickOnNegX19);
build.add(brickOnNegX20);
build.add(brickOnNegX21);
build.add(brickOnNegX22);
build.add(brickOnNegX23);
build.add(brickOnNegX24);
build.add(brickOnNegX25);
build.add(brickOnNegX26);
build.add(brickOnNegX27);
build.add(brickOnNegX28);
build.add(brickOnNegX29);
build.add(brickOnNegX30);
build.add(brickOnNegX31);
build.add(brickOnNegX32);
build.add(brickOnNegX33);
build.add(brickOnNegX34);
build.add(brickOnNegX35);
build.add(brickOnNegX36);
build.add(brickOnNegX37);
build.add(brickOnNegX38);
build.add(brickOnNegX39);
build.add(brickOnNegX40);
build.add(brickOnNegX41);
build.add(brickOnNegX42);
build.add(brickOnNegX43);


const cementWallYGroup = new THREE.Group();
cementWallYGroup.add(cementWallY0);
cementWallYGroup.add(cementWallY1);
// cementWallYGroup.add(cementWallY2);
// cementWallYGroup.add(cementWallY3);

const pillarGroup = new THREE.Group();
pillarGroup.add(pillar0);
pillarGroup.add(pillar1);

scenary.add(ground);
scenary.add(build);
scenary.add(cementWallYGroup);
scenary.add(cementWallX);
scenary.add(pillarGroup);

//camera and renderer
const aspectRatio = window.innerWidth / window.innerHeight;
const cam = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 300);

cam.position.z = 21;
cam.position.y = 10;
cam.position.x = 21;
scenary.add(cam);

const board = document.querySelector(".canvas-to-draw")

const render = new THREE.WebGLRenderer({
  canvas: board,
  antialias: true
})
render.setSize(window.innerWidth, window.innerHeight);

const control = new OrbitControls(cam, board);

const axis = new THREE.AxesHelper(10);
axis.position.x = 5;
axis.position.z = 5;
scenary.add(axis);

control.target.set(5, 0, 5);
control.autoRotate = false;

window.addEventListener('resize', () => {
  render.setSize(window.innerWidth, window.innerHeight);
  cam.aspect = window.innerWidth / window.innerHeight;
  cam.updateProjectionMatrix();
})

const renderloop = () => {
  control.update();
  render.render(scenary, cam);
  window.requestAnimationFrame(renderloop);
}

renderloop()

