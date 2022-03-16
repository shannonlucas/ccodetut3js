"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[630],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"put-it-together",title:"Putting it together",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},c=void 0,l={unversionedId:"scene-setup/put-it-together",id:"scene-setup/put-it-together",title:"Putting it together",description:"Now that you've assembled the lights, camera, and renderer, it's time to put those pieces together and actually create a scene. In a 3D scene, there's an invisible container that holds everything to be rendered and everything that affects the rendering (such as your lights and camera). This container is usually just called a \"scene,\" and it's how your computer makes sense of the objects you want to display.",source:"@site/docs/scene-setup/put-it-together.mdx",sourceDirName:"scene-setup",slug:"/scene-setup/put-it-together",permalink:"/ccodetut3js/scene-setup/put-it-together",tags:[],version:"current",frontMatter:{id:"put-it-together",title:"Putting it together",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"The animation loop",permalink:"/ccodetut3js/scene-setup/animation-loop"},next:{title:"A quick demo",permalink:"/ccodetut3js/scene-setup/quick-demo"}},p={},u=[],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that you've assembled the lights, camera, and renderer, it's time to put those pieces together and actually create a scene. In a 3D scene, there's an invisible container that holds everything to be rendered and everything that affects the rendering (such as your lights and camera). This container is usually just called a \"scene,\" and it's how your computer makes sense of the objects you want to display."),(0,i.kt)("p",null,"The function below uses what you've assembled so far to build a scene. First, the renderer and camera are created. Then, a scene object is created and passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"setUpLights")," function you assembled earlier. All the essential parts are now in place to render a 3D scene to your display."),(0,i.kt)("p",null,'After setting up the lights, the function adds a quality of life enhancement to the scene. Ideally, your scene should keep its relative position and size when the browser window is resized. This inner bit of code is called an "event listener," and it gets called whenever the window is resized. It tells the camera and renderer objects about the window\'s new size. Event listeners are outside the scope of this tutorial, but you can find a learning resource in the ',(0,i.kt)("a",{parentName:"p",href:"postscript"},"postscript")," of this module."),(0,i.kt)("p",null,"Finally, the function returns an object containing the newly created renderer, camera, and scene objects as the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"camera"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"scene"),", respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function setUpGraphics(elementId) {\n  const renderer = setUpRenderer(elementId);\n  const camera = setUpCamera();\n  const scene = new THREE.Scene();\n  setUpLights(scene);\n\n  // If the browser window gets resized, the camera and renderer have to be\n  // updated. This block of code handles that.\n  window.addEventListener('resize', () => {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n\n    renderer.setSize(window.innerWidth, window.innerHeight);\n  });\n\n  return { renderer, camera, scene };\n}\n")),(0,i.kt)("p",null,"What remains is to actually invoke your ",(0,i.kt)("inlineCode",{parentName:"p"},"setUpGraphics")," function to create the renderer, camera, and scene. The ",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"camera"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"scene")," objects below are created outside a function which makes them available to all other functions in the same JavaScript file."),(0,i.kt)("p",null,"You will make use of these values when you build the animation loop in the next section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { renderer, camera, scene } = setUpGraphics('#creative-code');\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Parameters can make code more reusable")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setUpGraphics")," function also accepts the ID of an HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<canvas>")," element as a parameter and then passes it on to the ",(0,i.kt)("inlineCode",{parentName:"p"},"setUpRenderer")," function. You may be asking why the ID of the HTML element is not just given since the name is known."),(0,i.kt)("p",{parentName:"div"},"One of the goals of this tutorial is to provide you with a set of building blocks that you can later reuse in your own projects. By passing the ID of the HTML element as a parameter, you can use the same functions in projects that render to an HTML element with a different ID."),(0,i.kt)("p",{parentName:"div"},"You might also want to render the same graphics in more than one place on the same page. Since HTML element IDs must be unique on a page, passing the ID as a parameter allows you to reuse the function rather than creating a copy for each element ID."))))}h.isMDXComponent=!0}}]);