---
id: module-code
sidebar_position: 10
---

# The code so far

## JavaScript

```javascript
/* For this tutorial, three.js version 0.137.5 is used. */
import * as THREE from 'https://cdn.skypack.dev/three@v0.137.5';

/**
 * Create a renderer and attach it to the HTML element with the provided ID.
 *
 * @param {string} elementId
 * @returns {THREE.WebGLRenderer} the newly created renderer
 */
 function setUpRenderer(elementId) {
  const canvas = document.querySelector(elementId);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;

  return renderer;
}

/**
 * Add lights to the given scene.
 * 
 * @param {THREE.Scene} scene 
 */
 function setUpLights(scene) {
  const light1 = new THREE.PointLight("#ea00d9"); // magenta
  light1.position.set(8, 3, 4);
  scene.add(light1);

  const light2 = new THREE.PointLight("#0abdc6"); // cyan
  light2.position.set(-6, 0, 2);
  scene.add(light2);
}

/**
 * Create a perspective camera that looks at the center of the scene.
 * 
 * @returns {THREE.Camera}
 */
 function setUpCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.lookAt(0, 0, 0);

  return camera;
}

/**
 * Setup the graphics to draw the art to.
 * 
 * @param {string} elementId the ID of the HTML <canvas> element to render the
 *        graphics to.
 * @returns {object} an object containing the renderer, camera, and scene
 *          objects.
 */
function setUpGraphics(elementId) {
  const renderer = setUpRenderer(elementId);
  const camera = setUpCamera();
  const scene = new THREE.Scene();
  setUpLights(scene);

  // If the browser window gets resized, the camera and renderer have to be
  // updated. This block of code handles that.
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { renderer, camera, scene };
}

const { renderer, camera, scene } = setUpGraphics('#generative-demo');
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
    <title>Generative Art with three.js</title>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
  </head>

  <body>
    <canvas id="generative-demo" class="three"></canvas>
  </body>

</html>
```

## CSS

```css
body {
  background-color: #202;
  color: #fff;
  overflow: hidden;
}

.three {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
```
