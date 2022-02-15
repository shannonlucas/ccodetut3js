---
sidebar_position: 1
---

# Getting Started

Since this project will run in a web browser, you will need an HTML file to
provide a canvas to render graphics on and a style sheet to provide some
essential styling to that HTML. You can find the boilerplate HTML and CSS for
this tutorial below.

Copy and paste the HTML and CSS code below into the appropriate panels of your
code playground. Then click the "Run" button. The result panel of your code
playground should now be filled with a dark purple color

You will not need to modify the HTML or CSS for the remainder of this tutorial.

## HTML

Note the `<canvas>` element in the code below. This is the element that your
graphics will actually render to.

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

The `.three` class in the code below will be applied to the `<canvas>` element
in the HTML code. This will cause your graphics to fill the browser window.

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
