"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[239],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1230:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"adding-renderer",title:"Adding the renderer",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},c=void 0,l={unversionedId:"scene-setup/adding-renderer",id:"scene-setup/adding-renderer",title:"Adding the renderer",description:"The renderer is what translates your 3D scene into pixels on your display. It is the bridge between the mathematical models of the objects in your scene and the hardware that generates images on your display.",source:"@site/docs/scene-setup/adding-renderer.mdx",sourceDirName:"scene-setup",slug:"/scene-setup/adding-renderer",permalink:"/ptw310/scene-setup/adding-renderer",tags:[],version:"current",frontMatter:{id:"adding-renderer",title:"Adding the renderer",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"Adding the camera",permalink:"/ptw310/scene-setup/adding-camera"},next:{title:"The animation loop",permalink:"/ptw310/scene-setup/animation-loop"}},u={},d=[],p={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The renderer is what translates your 3D scene into pixels on your display. It is the bridge between the mathematical models of the objects in your scene and the hardware that generates images on your display."),(0,a.kt)("p",null,"You'll use a ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")," for this project. WebGL is a low-level programming interface supported by modern browsers. There are other types of renderers in three.js, but they are for specific, advanced use cases that aren't covered in this tutorial."),(0,a.kt)("p",null,"The function below accepts the ID of an HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<canvas>")," element as its only parameter. It then queries the HTML for that element and passes it to the renderer when you create it on the next line."),(0,a.kt)("p",null,"Note that one of the options passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"alpha: true"),". This option tells the renderer to use a transparent background and allow the background color you specified in your CSS to show through. If you don't set this option, the background of the scene will be black."),(0,a.kt)("p",null,"The function then sets its size to fill the entire browser window. Setting the pixel ratio ensures that the image isn't blurry if you're using a high resolution display (HiDPI or \"Retina\" displays)."),(0,a.kt)("p",null,"Finally, the function returns the renderer object it created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function setUpRenderer(elementId) {\n  const canvas = document.querySelector(elementId);\n  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });\n\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.setPixelRatio(window.devicePixelRatio);\n\n  return renderer;\n}\n")))}h.isMDXComponent=!0}}]);