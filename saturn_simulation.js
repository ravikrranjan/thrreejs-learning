
import { Scene, Color, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, SphereGeometry, Mesh, TorusGeometry, AxisHelper } from "./node_modules/three/build/three.module.js";


let scene, camera, renderer;
let planet;

let rings = [];
let ADD = 0.01;
let ring;
let axes;

let createSaturn = function () {
    let geometry = new SphereGeometry(2.5, 30, 30);
    let material = new MeshBasicMaterial({ color: 0x8d5524 });

    planet = new Mesh(geometry, material);

    scene.add(planet);

    geometry = new TorusGeometry(4, 0.7, 2, 50);
    material = new MeshBasicMaterial({ color: 0xffe39f });
    ring = new Mesh(geometry, material);
    rings.push(ring);

    geometry = new TorusGeometry(6, 0.7, 2, 50);
    material = new MeshBasicMaterial({ color: 0xffad60 });
    ring = new Mesh(geometry, material);
    rings.push(ring);

    geometry = new TorusGeometry(8, 0.7, 2, 50);
    material = new MeshBasicMaterial({ color: 0xeac086 });
    ring = new Mesh(geometry, material);
    rings.push(ring);

    rings.forEach(ring => {
        ring.rotation.x = 5;
        ring.rotation.y = -0.5
        scene.add(ring);
    })
};

let init = function () {

    //craet the scene
    scene = new Scene();
    scene.background = new Color(0x000000);

    //create an locate the camera

    camera = new PerspectiveCamera(3000,
        window.innerWidth / window.innerHeight,
        1, 1000);

    camera.position.z = 20;

    //ceate the renderer
    createSaturn();

    axes = AxisHelper(10);
    scene.add(axes);

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

};

let mainLoop = function () {
    // camera.position.y += ADD;

    // if (camera.position.y >= 5 || camera.position.y <= -5)
    //     ADD *= -1;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();

window.__scene = scene;
window.__color = Color;