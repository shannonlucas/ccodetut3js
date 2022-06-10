"use strict";(self.webpackChunkptw310_project=self.webpackChunkptw310_project||[]).push([[698],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9158:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"postscript",title:"Postscript",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},l=void 0,p={unversionedId:"adding-objects/postscript",id:"adding-objects/postscript",title:"Postscript",description:"In this module, you added objects to your scene and then animated them together as a group. You also got a glimpse of vectors, meshes, and materials.",source:"@site/docs/adding-objects/postscript.mdx",sourceDirName:"adding-objects",slug:"/adding-objects/postscript",permalink:"/ptw310/adding-objects/postscript",tags:[],version:"current",frontMatter:{id:"postscript",title:"Postscript",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"Spinning the grid",permalink:"/ptw310/adding-objects/spinning-grid"},next:{title:"Checkpoint",permalink:"/ptw310/adding-objects/checkpoint"}},c={},u=[{value:"Optional exercises",id:"optional-exercises",level:2},{value:"Additional resources",id:"additional-resources",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this module, you added objects to your scene and then animated them together as a group. You also got a glimpse of vectors, meshes, and materials."),(0,o.kt)("p",null,"The next module will cover adding behavior to the grid cells you created in this module. The more abstract notion of state will also be introduced."),(0,o.kt)("h2",{id:"optional-exercises"},"Optional exercises"),(0,o.kt)("p",null,"If you would like to experiment with the demo before moving on to the next module, here are some things to try. Once you're done experimenting, be sure to restore your code to its previous state before moving on to the next module. If you are unsure what you have changed, you can get your code back to the tutorial state by copying it from this module's ",(0,o.kt)("a",{parentName:"p",href:"checkpoint"},"checkpoint"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Try different values for ",(0,o.kt)("inlineCode",{parentName:"p"},"GRID_SIZE"),". Remember that this value must be an integer. Be aware that as you increase this value, there will be a point where the animation noticeably slows down and may even cause your browser to crash.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCellVisual")," function only creates cubes. Change the function so that it creates a shape other than a cube. For example, try creating tetrahedrons instead (using ",(0,o.kt)("inlineCode",{parentName:"p"},"THREE.TetrahedronGeometry"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," function used in this module rotates the grid on the y-axis. Add a line to the function so that the grid also rotates on the x-axis. How does this affect the overall scene? What happens if you go a step further and also rotate it on the z-axis?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What if the shape of each cell was determined randomly? Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCellVisual")," function so that it creates a random shape each time it is called. Limit the possible random shapes to ",(0,o.kt)("inlineCode",{parentName:"p"},"THREE.BoxGeometry"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"THREE.ConeGeometry")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"THREE.SphereGeometry"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consider the logic that determines where to place the camera:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"camera.position.set(0, 0, GRID_SIZE * (MAX_CELL_SIZE + CELL_SPACING));\n")),(0,o.kt)("p",{parentName:"li"},"How might you modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"setUpLights")," function so that the position of the lights is determined by the size of your rotating grid? What happens if you accidentally place one of your lights inside the grid? ",(0,o.kt)("em",{parentName:"p"},"This is an advanced exercise"),"."))),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vectors",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ml4NSzCQobk"},"What is a vector?")," - a 5-minute animated video from TED-Ed about vectors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.grc.nasa.gov/www/k-12/airplane/vectors.html"},"Scalars and Vectors")," - an overview from NASA of vectors and scalars and how they are used"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mathinsight.org/vector_introduction"},"An introduction to vectors")," - a lengthier written article from Math Insight about vectors and basic vector math"))),(0,o.kt)("li",{parentName:"ul"},"JavaScript topics",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"},"Array.prototype.flat()")," - documentation about the ",(0,o.kt)("inlineCode",{parentName:"li"},".flat()")," method on arrays."))),(0,o.kt)("li",{parentName:"ul"},"three.js classes introduced in this section",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry"},"BoxGeometry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/en/objects/Group"},"Group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/en/objects/Mesh"},"Mesh")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial"},"MeshStandardMaterial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/index.html#api/en/math/Vector3"},"Vector3"))))))}m.isMDXComponent=!0}}]);