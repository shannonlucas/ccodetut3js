"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[857],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,g=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"put-it-together",title:"Putting it together",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},s=void 0,c={unversionedId:"adding-objects/put-it-together",id:"adding-objects/put-it-together",title:"Putting it together",description:"You now have code that will create a number of cells arranged as a grid in your 3D scene. Recall that the desired result is to have those cells tilted on a corner and, eventually, to have them rotate as a group around a central axis.",source:"@site/docs/adding-objects/put-it-together.mdx",sourceDirName:"adding-objects",slug:"/adding-objects/put-it-together",permalink:"/ccodetut3js/adding-objects/put-it-together",tags:[],version:"current",frontMatter:{id:"put-it-together",title:"Putting it together",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"Creating the grid",permalink:"/ccodetut3js/adding-objects/creating-grid"},next:{title:"Spinning the grid",permalink:"/ccodetut3js/adding-objects/spinning-grid"}},u={},d=[{value:"Grouping the cells",id:"grouping-the-cells",level:2},{value:"Displaying the cells",id:"displaying-the-cells",level:2},{value:"Positioning the camera",id:"positioning-the-camera",level:2}],h={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You now have code that will create a number of cells arranged as a grid in your 3D scene. Recall that the desired result is to have those cells tilted on a corner and, eventually, to have them rotate as a group around a central axis."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"An image of an eight-by-eight grid of squares tilted 45 degrees",src:n(9799).Z,title:"The cells need to be movable as a group",width:"640",height:"362"})),(0,o.kt)("h2",{id:"grouping-the-cells"},"Grouping the cells"),(0,o.kt)("p",null,"You can move all of your cells together by grouping them, and three.js provides the tools to do this. It is also a straightforward process. The function below creates a new group, iterates over the rows and columns of your cell grid, and adds each cell to the group."),(0,o.kt)("p",null,"It then rotates the entire group 45 degrees before returning the group object. Keep in mind that rotation in three.js is specified in radians. The radian is a unit of angular measurement, and the number of radians in half a circle (180 degrees) is equal to the mathematical constant ","\u03c0"," (",(0,o.kt)("inlineCode",{parentName:"p"},"Math.PI")," in JavaScript)."),(0,o.kt)("p",null,"This is a short function, and you may wonder why it was not simply combined with the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildGridMeshes")," function in the previous section. Because the end goal is to add behavior to the individual cells of the grid, you need to maintain access to the original nested array of cells. It will be harder to access these cells if only the group object is available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function groupCellMeshes(cells) {\n  const cellGroup = new THREE.Group();\n\n  for (const cell of cells.flat()) {\n    cellGroup.add(cell);\n  }\n\n  // Tilt the group 45 degrees (in radians)\n  cellGroup.rotation.z = Math.PI / 4;\n\n  return cellGroup;\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Array flattening")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The function above iterates over a flattened copy of the ",(0,o.kt)("inlineCode",{parentName:"p"},"cells")," array. The group object doesn't have any knowledge of which row and column each cell is located at. So in this case, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},".flat()")," method to simplify your code. See this module's ",(0,o.kt)("a",{parentName:"p",href:"postscript#additional-resources"},"postscript")," for more information about array flattening."))),(0,o.kt)("h2",{id:"displaying-the-cells"},"Displaying the cells"),(0,o.kt)("p",null,"You're ready to actually display these cells now. To start, you'll need to define a few constant values. You will use some of these values again later when you begin adding behavior to your scene. Since you're defining these as constants, you'll only have to change them in one place when you begin experimenting with your project."),(0,o.kt)("p",null,"The first thing you need is your grid size. This is the number of rows and columns that will be in the cell grid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const GRID_SIZE = 8;\n")),(0,o.kt)("p",null,"Next, define how large your cells will be. Notice that the name of this constant indicates this is a maximum. In the next module, you will cause the cells to grow and shrink. This value will be the limit of how large they can grow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const MAX_CELL_SIZE = 1.0;\n")),(0,o.kt)("p",null,"Finally, you need to decide how far apart each cell should be. There is nothing special about this number, and the spacing is purely aesthetic. For this tutorial, set the spacing to one tenth the maximum size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const CELL_SPACING = MAX_CELL_SIZE / 10;\n")),(0,o.kt)("p",null,"Now create the cell meshes, group them together, and then add the group to the\nscene. You created the ",(0,o.kt)("inlineCode",{parentName:"p"},"scene")," variable in the ",(0,o.kt)("a",{parentName:"p",href:"/scene-setup/put-it-together"},"previous module"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const cellMeshes = buildGridMeshes(GRID_SIZE, MAX_CELL_SIZE, CELL_SPACING);\nconst cellGroup = groupCellMeshes(cellMeshes);\n\nscene.add(cellGroup);\n")),(0,o.kt)("h2",{id:"positioning-the-camera"},"Positioning the camera"),(0,o.kt)("p",null,"If you ran your code right now, you wouldn't see anything. The camera you created in the ",(0,o.kt)("a",{parentName:"p",href:"/scene-setup/adding-camera"},"previous module"),' is located at its default location: (0, 0, 0), and it was set to "look at" the position (0, 0, 0) as well. This means that at the moment all the cells you just created are out of view.'),(0,o.kt)("p",null,"You will need to move it far enough away from your grid so that all the cells are visible. You only need to change the camera's z-axis position to do this, and leaving the x-axis and y-axis positions as is will keep the grid centered on the screen."),(0,o.kt)("p",null,"A good starting distance will be the grid size multiplied by the sum of the cell size and the cell spacing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"camera.position.set(0, 0, GRID_SIZE * (MAX_CELL_SIZE + CELL_SPACING));\n")),(0,o.kt)("p",null,"Run your code now, and your scene will look like the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"An image of an eight-by-eight grid of squares tilted 45 degrees",src:n(9799).Z,title:"What you should see when you run your code",width:"640",height:"362"})))}p.isMDXComponent=!0},9799:function(e,t,n){t.Z=n.p+"assets/images/tilted-cube-grid-f9db7981dcacb6002c33687eeb8c411f.png"}}]);