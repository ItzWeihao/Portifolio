import * as THREE from 'three';


// Creating a scene, camera and renders the scene
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
export const renderer = new THREE.WebGLRenderer();

// Creates a cube
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
export const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

// Creates a line
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } )
const points = [];
points.push( new THREE.Vector2( -10, 0, 0 ) );
points.push( new THREE.Vector2( 0, 10, 0 ) );
points.push( new THREE.Vector2( 10, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
export const line = new THREE.Line( lineGeometry, lineMaterial );



export function lineRotate() {
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
}

export function cubeRotate() {
    cube.rotation.x -= 0.01;
    cube.rotation.y -= 0.01;
    cube.rotation.z -= 0.01;
}