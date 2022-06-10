"use strict";(self.webpackChunkptw310_project=self.webpackChunkptw310_project||[]).push([[81],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,f=d["".concat(s,".").concat(g)]||d[g]||l[g]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"spinning-grid",title:"Spinning the grid",keywords:["animation","creative coding","graphics","javascript","three.js","3D","tutorial"]},s=void 0,u={unversionedId:"adding-objects/spinning-grid",id:"adding-objects/spinning-grid",title:"Spinning the grid",description:"You'll finish this module by making the grid you've created rotate as a whole around the vertical axis of your screen.",source:"@site/docs/adding-objects/spinning-grid.mdx",sourceDirName:"adding-objects",slug:"/adding-objects/spinning-grid",permalink:"/ptw310/adding-objects/spinning-grid",tags:[],version:"current",frontMatter:{id:"spinning-grid",title:"Spinning the grid",keywords:["animation","creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"Putting it together",permalink:"/ptw310/adding-objects/put-it-together"},next:{title:"Postscript",permalink:"/ptw310/adding-objects/postscript"}},p={},l=[],d={toc:l};function g(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You'll finish this module by making the grid you've created rotate as a whole around the vertical axis of your screen."),(0,i.kt)("p",null,"Begin by creating a constant to store the rotation speed. This will be how many radians the group should rotate each frame. When you created your animation loop in the ",(0,i.kt)("a",{parentName:"p",href:"/scene-setup/animation-loop"},"previous module"),", it was set\nto render 60 frames each second. So your rotation speed is going to be a small number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const ROTATION_SPEED = 0.0075;\n")),(0,i.kt)("p",null,"All that remains is to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," function to increment the grid's y-axis rotation property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function update() {\n  cellGroup.rotation.y += ROTATION_SPEED;\n}\n")),(0,i.kt)("p",null,"Run your code now, and you will see the animation below."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Animation of a rotating cube produced by the demo at the end of this module",src:n(7023).Z,title:"This module's demo",width:"512",height:"273"})))}g.isMDXComponent=!0},7023:function(e,t,n){t.Z=n.p+"assets/images/module-outcome-529f674d6827c6c1b36d7392766bbc40.gif"}}]);