---
id: animation-loop
title: The animation loop
sidebar_position: 9
---

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
