import WebGL from 'three/addons/capabilities/WebGL.js';
import { scene, camera, renderer } from './Javascript/utils.js';
import { cube, line } from './Javascript/utils.js';
import { lineRotate, cubeRotate } from './Javascript/utils.js';

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add( cube, line );

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

function animate() {
	requestAnimationFrame( animate );

    lineRotate();
    cubeRotate();

	renderer.render( scene, camera );
}

if ( !WebGL.isWebGLAvailable() ) {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

} else { animate(); }
