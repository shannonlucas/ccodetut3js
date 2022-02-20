---
id: animation-loop
title: The animation loop
sidebar_label: Animation loop
sidebar_position: 4
pagination_label: The animation loop
description: The animation loop in three.js and controlling frame rate 
             independent of refresh rate.
keywords:
  - animation
  - creative coding
  - graphics
  - javascript
  - three.js
  - 3D
  - tutorial
---

So far, you've focused only on the mechanics of how a scene gets rendered.
You'll now move on to when a scene gets rendered and updated.

The animation loop is an activity that your computer carries out every time it
updates, or *refreshes*, the image on your display. Programs can attach
functions to this loop to cause their own graphics to be updated when your
computer refreshes the display.

As you progress through this section, copy and paste each block of JavaScript
code at the end of the JavaScript panel of your code playground.

## Refresh rates and frame rates

Your computer redraws the content on your display many times every second. How
often this happens is referred to as the *refresh rate*. You may have seen this
term in the product data for monitors or televisions with values such as 60Hz
or 120Hz. The unit Hz (Hertz) means number of times per second. So a display
with a 60Hz refresh rate will redraw the screen 60 times every second.

The *frame rate* of your animation is how many times your animation updates each
second. The frame rate is sometimes the same value as the refresh rate, but it
is independent. An animation's frame rate is affected by factors such as how
much detail is in the animation and how powerful the computer rendering it is.

Why does this matter? You have to govern the frame rate of your animation so
that it will render at the same speed on different displays. Otherwise, an
animation on a 120Hz display will be twice as fast as it is on a 60Hz display if
the refresh rate is ignored.

## Tracking time

Unfortunately, you can't simply ask what the refresh rate is or specify a
desired frame rate using JavaScript. Instead, you will need to know how many
frames per second you intend to draw, and you will have to keep track of the
time the last frame was drawn.

This isn't as daunting as it sounds. Time in JavaScript is measured in
milliseconds, so you need to calculate how many milliseconds there should be
between frame updates. There are 1000 milliseconds in each second. Assume a
target frame rate of 60 frames per second. You can then compute the frame time
with the line of code below.

```javascript
const MILLISECONDS_PER_FRAME = 1000 / 60;
```

Next, you will need a variable to keep track of how much time in milliseconds
has passed since the last frame was rendered. Set this variable to zero since no
frames have been rendered yet.

```javascript
let lastFrameTime = 0;
```

## Working with the animation loop

You now need a function that you can attach to the animation loop. Your web
browser will call this function whenever your computer refreshes your display.
When the browser calls the function, it pass a single parameter to it that
indicates the time in milliseconds since your animation started.

As you learned earlier, you don't necessarily want to update your animation on
each refresh. The function computes the elapsed time since it rendered the last
frame and checks to see if that time is greater than or equal to the frame time
you computed and stored in `MILLISECONDS_PER_FRAME`.

If enough time has passed, your animation will get updated, your scene will be
re-rendered, and the value of `lastFrameTime` is set to the current time.

This sequence of events will repeat each time the animation loop calls this
function.

Take note of the `update` function on the highlighted line in this code block.
You will create this function soon. Also note that you are making use of the
`scene`, `camera`, and `renderer` that you created in the previous section.

```javascript
function animate(animationTime) {
  const elapsedTime = animationTime - lastFrameTime;

  if (elapsedTime >= MILLISECONDS_PER_FRAME) {
    // highlight-next-line
    update();
    renderer.render(scene, camera);
    lastFrameTime = animationTime;
  }
}
```

Now you need to let the browser know to start calling this function as part of
the animation loop. The following line of code will add the `animate` function
to the animation loop and start rendering your scene.

```javascript
renderer.setAnimationLoop(animate);
```

:::important
Notice that the value passed to the function `setAnimationLoop` is not
surrounded by quote marks. You are passing the function itself as a parameter
rather than a string containing a function name.
:::

## The `update` function

When you created the `animate` function above, you made use of a function named
`update` that you had not yet created. You will find this function below, and,
as you can see, it is empty. There is a reason for this.

```javascript
function update() {
  // Your project's animation code will go here.
}
```

Controlling your frame rate is something you will do in every future project
involving three.js. By moving the code that's specific to just one project into
a separate function, you can now reuse the `animate` function in other projects.
In fact, all of the code you've assembled so far can be used with other projects
as-is.
