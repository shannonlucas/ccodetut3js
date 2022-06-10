"use strict";(self.webpackChunkptw310_project=self.webpackChunkptw310_project||[]).push([[812],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"creating-objects",title:"Creating the objects",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},c=void 0,l={unversionedId:"adding-objects/creating-objects",id:"adding-objects/creating-objects",title:"Creating the objects",description:"Meshes",source:"@site/docs/adding-objects/creating-objects.mdx",sourceDirName:"adding-objects",slug:"/adding-objects/creating-objects",permalink:"/ptw310/adding-objects/creating-objects",tags:[],version:"current",frontMatter:{id:"creating-objects",title:"Creating the objects",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"Adding objects",permalink:"/ptw310/adding-objects/"},next:{title:"Creating the grid",permalink:"/ptw310/adding-objects/creating-grid"}},p={},u=[{value:"Meshes",id:"meshes",level:2},{value:"Vectors",id:"vectors",level:2},{value:"Creating individual cells",id:"creating-individual-cells",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"meshes"},"Meshes"),(0,a.kt)("p",null,'In 3D graphics, a "mesh" is a mathematical model of a thing you want to show in your scene. It combines the geometry, or shape, of a 3D object with a "material" or appearance. The mesh also contains information about where the object is located in your scene and how it is oriented. Fortunately, the vast majority of the necessary math is handled for you by three.js.'),(0,a.kt)("h2",{id:"vectors"},"Vectors"),(0,a.kt)("p",null,"You will encounter vectors frequently when working with computer graphics. Vectors, as you'll use them in this tutorial, are a group of numbers. You'll use a three number vector to store an object's x, y, and z coordinates as a single unit, and you'll also use a vector to store the size of an object on its x, y, and z axes."),(0,a.kt)("p",null,"Thinking of vectors as a group of numbers is a helpful simplification for the time being, but if you spend more time with 3D graphics programming, you'll learn that there's far more substance to vectors. If you'd like to know more about vectors, you can find links to learning resources in the ",(0,a.kt)("a",{parentName:"p",href:"postscript#additional-resources"},"postscript")," of this module."),(0,a.kt)("h2",{id:"creating-individual-cells"},"Creating individual cells"),(0,a.kt)("p",null,'The objects you will be working with in this tutorial are cubes. However, they don\'t have to be cubes, and when a generic term is more appropriate, the term "cell" will be used. Using this term will also reduce confusion about the many meanings of the term "object" in the context of graphics programming.'),(0,a.kt)("p",null,'The function below builds the mesh for a single cell in your grid. In the introduction to the tutorial, you learned that meshes are mathematical models of the objects in your scene. They combine both the geometry of an object with the "material" or appearance of the object. The mesh also contains information about where the object is located in your scene and how it is oriented.'),(0,a.kt)("p",null,"In this instance you are creating the geometry for a box. The object returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"THREE.BoxGeometry")," contains the location of the 8 corners and the edges that connect them to form a cube."),(0,a.kt)("p",null,'Next, you are creating a "material" that the cube is made of. The material determines what the object will appear to be made of. Different materials can cause an object to look like glass, wood, or even a cartoon. In this case, you are creating a simple material with a gray color. The color that ',(0,a.kt)("inlineCode",{parentName:"p"},"THREE.MeshStandardMaterial")," expects is a hexadecimal color code like you would use in HTML or CSS."),(0,a.kt)("p",null,"You then combine the geometry and the material into a mesh."),(0,a.kt)("p",null,"The function requires two parameters that are of type ",(0,a.kt)("inlineCode",{parentName:"p"},"THREE.Vector3"),". Each has ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," properties. The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," is used to set the location of the mesh, and the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," is used to set the size of the mesh."),(0,a.kt)("p",null,"Finally, the function returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"THREE.Mesh")," that you created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function buildCellMesh(position, size) {\n  const geometry = new THREE.BoxGeometry();\n  const material = new THREE.MeshStandardMaterial({ color: "#aaa" });\n  const mesh = new THREE.Mesh(geometry, material);\n\n  mesh.position.copy(position);\n  mesh.scale.copy(size);\n\n  return mesh;\n}\n')),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Vector Properties in three.js")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"As a general rule in three.js, if you are working with an object such as a mesh, vector properties must be manipulated with methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"copy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," or by setting their individual ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," properties."),(0,a.kt)("p",{parentName:"div"},"The reasons for this are outside the scope of this tutorial, but be aware of it as you experiment. Sometimes unexpected behavior or errors can be caused by attempting to assign these properties directly."))))}d.isMDXComponent=!0}}]);