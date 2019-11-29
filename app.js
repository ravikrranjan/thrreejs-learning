import { Scene, Color, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from "./node_modules/three/build/three.module.js";

let scene, camera, renderer, cube;

//set up the environment


let createCube = function () {

    let geometry = new BoxGeometry(1, 1, 1);
    let material = new MeshBasicMaterial({ color: 0x00a1cb });
    cube = new Mesh(geometry, material);
    scene.add(cube);
};

let init = function () {

    //craet the scene
    scene = new Scene();
    scene.background = new Color(0xababab);

    //create an locate the camera

    camera = new PerspectiveCamera(30,
        window.innerWidth / window.innerHeight,
        1, 1000);

    camera.position.z = 5;

    //ceate the renderer

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

};

let mainLoop = function () {
    createCube();

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();

window.__scene = scene;
window.__Color = Color;
