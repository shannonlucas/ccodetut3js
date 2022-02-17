---
sidebar_position: 2
---

# Setting up the Scene

All three-dimensional graphics scenes have some core elements in common
regardless of which graphics library you are using.

* One or more objects to be the subject of the scene. These are the things you
  want people to see when they look at what you've created. This could be
  something simple such as a single cube or a complex animation of many detailed
  objects.
* One or more light sources so the objects in the scene will be visible. There
  are situations where the absence of a light source can be used for artistic
  intent, but you will use light sources in this tutorial.
* A camera to provide a view of the scene. What the camera "sees" is what gets
  displayed on your display.
* A scene to contain the objects, lights, and camera. The scene is an a
  container that coordinates the various items that affect what gets shown on
  your display.
* A renderer to translate the three-dimensional scene into pixels on your
  display.
* An animation loop to keep your scene updated.

As you progress through this section, copy and paste each block of JavaScript
code at the end of the JavaScript panel of your code playground.

## Set up the renderer

The render is what actually converts your 3D scene into pixels on your display.
You will use a `WebGLRenderer` for this project. WebGL is a low-level
programming interface supported by modern browsers. There are other types of
renderers in three.js, but they are for specific, advanced use cases that aren't
covered in this tutorial.

The function below accepts the ID of an HTML `<canvas>` element as its only
parameter. It then attaches the renderer to that element. Note that one of the
options passed to the `WebGLRenderer` is `alpha: true`. This option tells the
renderer to use a transparent background and allow the background color you
specified in your CSS to show through.

The function then sets its size to fill the entire browser window. Setting the
pixel ratio ensures that the image isn't blurry if you are using a high
resolution display (HiDPI or "Retina" displays).

Finally, the function returns the renderer object it created.

```javascript
 function setUpRenderer(elementId) {
  const canvas = document.querySelector(elementId);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  return renderer;
}
```

## Set up the lights

Lights will make the objects you add later visible. Otherwise, your scene will
be completely dark.

The function below accepts a scene object (you will create one soon) and adds
two `PointLight` light sources to it. You can think of a point light as a
candle: it shines equally in all directions.

The first light, `light2` is magenta, and `light2` is cyan. These lights are
positioned using the `.position.set` method on each light. The `.position.set`
method takes three parameters: the `x`, `y`, and `z` coordinates of the light.

For now, they are positioned in an arbitrary fashion that will work for the
project you are building in this tutorial.

Note that this function does not return anything since it adds the lights
directly to the scene object you will pass to it as a parameter.

```javascript
 function setUpLights(scene) {
  const light1 = new THREE.PointLight("#ea00d9", 1);
  light1.position.set(8, 3, 4);
  scene.add(light1);

  const light2 = new THREE.PointLight("#0abdc6", 1);
  light2.position.set(-6, 0, 2);
  scene.add(light2);
}
```

:::note
Strictly speaking, lights are not required in a scene. There are situations
where the absence of a light source can be used for artistic intent. For
example, you could create a scene with a light background where all the objects
appeared as silhouettes because there are no lights. It is also possible to
create objects that glow.

These are things to experiment with as you explore further. For this tutorial,
you will use light sources.
:::

## Set up the camera

The camera is what "sees" your scene. What it sees is what gets rendered on your
display. For this tutorial you will use a `PerspectiveCamera`. This will cause
objects to be rendered like they would appear in the real world with objects
in the distance appearing smaller than objects that are close.

Despite its short length, there are some important things happening here.

The first parameter that `PerspectiveCamera` takes is the vertical field of
view measured in degrees. Typical human vision has a vertical range of 150
degrees with a 60 degree vertical range for central vision[^1]. This camera is
set to 75 degrees which provides a reasonable default for most scenes.

The second parameter is the aspect ratio. You may have seen this written as a
ratio such as 16:9, 21:9, or 4:3 in the context of televisions or computer
displays. In short it's the ratio of a display's width to its height. The
camera needs this information to make sure that a square object appears square
on your display. The function computes the ratio by dividing your browser
window's width by its height.

The last two parameters specify the closest distance to and farthest distance
from the camera, respectively, that an object in the scene can be and still be
visible. three.js uses Standard International (SI) units[^2]. So in this case,
the camera can see things as close as 10 centimeters and as far away as 1,000
meters.

The function then sets the camera to look at the center, or origin, of the
scene. Finally, it returns the newly created camera object.

```javascript
 function setUpCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.lookAt(0, 0, 0);

  return camera;
}
```

## Set the stage

```javascript
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

## The animation loop

```javascript
// How many milliseconds to wait between drawing each frame. Divide one second
// (1000 milliseconds) by the target frame rate of 60 frames per second.
const MILLISECONDS_PER_FRAME = 1000 / 60;

//
let latestFrame = 0;

/**
 * Animates the scene.
 * 
 * This function is called every time computer refreshes its display. The
 * refresh rate will vary from one computer to another and may even vary on the
 * same computer.
 * 
 * To make the animation consistent from one computer to another, the function
 * only updates the animation at a set interval.
 */
function animate() {
  const now = Date.now();
  const elapsedTime = now - latestFrame;

  if (elapsedTime >= MILLISECONDS_PER_FRAME) {
    renderer.render(scene, camera);
    latestFrame = now;
  }
}

// Start the animation loop
renderer.setAnimationLoop(animate);
```

[^1]: [https://en.wikipedia.org/wiki/Field_of_view#Humans_and_animals](https://en.wikipedia.org/wiki/Field_of_view#Humans_and_animals)
[^2]: [https://github.com/mrdoob/three.js/issues/6259](https://github.com/mrdoob/three.js/issues/6259)
