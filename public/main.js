import * as THREE from '/node_modules/three/build/three.module.js'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
//import {FontLoader} from 'three/addons/loaders/FontLoader.js';
//import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
import { FontLoader, TextGeometry } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';



console.log("yo")

const cursor = {
	x: 0,
	y: 0
}
window.addEventListener("mousemove", (event) => 
{
	cursor.x = event.clientX / sizes.width - 0.5
	cursor.y = -(event.clientY / sizes.height - 0.5) 
})

const canvas = document.querySelector('canvas.webgl')
canvas.classList.add("webgl")

const sizes = {
	width: 1000,
	height: 1200
}


//CREATION SCENE ET MESH
const scene = new THREE.Scene()
//scene.background = new THREE.Color(0x000000);

const mesh = new THREE.Mesh(
	//new THREE.BoxGeometry(3, 0.1, 3, 5, 5, 5),
	//new THREE.MeshBasicMaterial({ color: 0x000000 })
)
scene.add(mesh)


//CREATION CAMERA
const camera = new THREE.PerspectiveCamera(140, sizes.width / sizes.height)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)



//CREATION RENDER 
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
  alpha: true,
})
renderer.setSize(sizes.width, sizes.height)



//CREATION RENDER PAR SEC POUR ANIMATION
const clock = new THREE.Clock()

const tick = () => 
{
	const elapsedTime = clock.getElapsedTime()
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 4.5
	  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 4.5
    camera.position.y = cursor.y * 10
    camera.lookAt(new THREE.Vector3())

	renderer.render(scene, camera)

	window.requestAnimationFrame(tick)
}

tick()



const controls = new OrbitControls( camera, renderer.domElement );




//IMPORT BLENDER1

// const loader = new GLTFLoader()

// loader.load( 'modeles/sceneBis2.gltf', function ( gltf ) {
// 	new THREE.MeshBasicMaterial({ color: 0xffffff })
//   const newScale = 5
//   mesh.scale.set(newScale, newScale, newScale);
// 	scene.add( gltf.scene );
	
// }, undefined, function ( error ) {

// 	console.error( error );

// } );



//IMPORT BLENDER2
const loader = new GLTFLoader();

loader.load('../assets/sceneBis2.gltf', function (gltf) {
    const loadedMesh = gltf.scene.children[0]; 

    const newScale = 1.4
    loadedMesh.scale.set(newScale, newScale, newScale)

    
    scene.add(loadedMesh)

}, undefined, function (error) {
    console.error(error)
});





//VIDEO
const video = document.getElementById("backgroundVideo")
video.removeAttribute("controls")

// Pour afficher la barre de controle
// video.setAttribute("controls", "true")