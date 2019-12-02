import { Scene, Color, PerspectiveCamera, WebGLRenderer, TorusGeometry, MeshBasicMaterial, Mesh } from "./node_modules/three/build/three.module.js";

let scene, camera, renderer;

let donuts = [];
let ADD = 0.1;

let randomInRange = function (from, to) {
    let x = Math.random() * (to - from);
    return x + from;
};

let createDonut = function () {

    let geometry = new TorusGeometry(1, 0.5, 5, 30);
    let material = new MeshBasicMaterial({
        color: Math.random() * 0xffffff
    });

    let d = new Mesh(geometry, material);

    d.position.x = randomInRange(-15, 15);
    d.position.z = randomInRange(-15, 15);
    d.position.y = 15;

    scene.add(d);
    donuts.push(d);
}



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
    // createDonut();
    donuts.forEach(d => d.position.y -= ADD);
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();
