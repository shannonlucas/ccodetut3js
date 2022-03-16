"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[937],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9880:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=o(7462),i=o(3366),n=(o(7294),o(3905)),a=["components"],l={id:"introduction",title:"Creative coding with three.js",slug:"/",sidebar_position:1,sidebar_label:"Introduction",toc_max_heading_level:2},s=void 0,u={unversionedId:"introduction",id:"introduction",title:"Creative coding with three.js",description:"The idea of using programming as a creative medium isn't new. In fact, people began using computers as a creative outlet almost as soon as computers became widely available.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/ccodetut3js/",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Creative coding with three.js",slug:"/",sidebar_position:1,sidebar_label:"Introduction",toc_max_heading_level:2},sidebar:"sidebar",next:{title:"Setting up a scene",permalink:"/ccodetut3js/scene-setup/"}},c={},d=[{value:"What you will build",id:"what-you-will-build",level:2},{value:"Who this tutorial is for",id:"who-this-tutorial-is-for",level:2},{value:"How this tutorial is structured",id:"how-this-tutorial-is-structured",level:2},{value:"How to enter the code",id:"how-to-enter-the-code",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Online code playgrounds",id:"online-code-playgrounds",level:3},{value:"Learning JavaScript",id:"learning-javascript",level:3},{value:"Free culture copyright",id:"free-culture-copyright",level:2}],p={toc:d};function h(e){var t=e.components,l=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The idea of using programming as a creative medium isn't new. In fact, people began using computers as a creative outlet almost as soon as computers became widely available."),(0,n.kt)("p",null,"Creative coding differs from traditional programming in that the intent is expression rather than function. This intention separates it from traditional software development, and even from game development. Though in the case of the latter, the line between expression and function is often blurry."),(0,n.kt)("p",null,'Tinkering and experimentation are embraced by creative coding. And there are many "happy accidents," in the words of painter Bob Ross, that lead to interesting and engaging works.'),(0,n.kt)("h2",{id:"what-you-will-build"},"What you will build"),(0,n.kt)("p",null,"This tutorial will guide you through assembling a set of building blocks that you can use to experiment with 3D graphics in your web browser. You'll then assemble a complete project using these building blocks. The animation below is what you'll be building."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"An animation of a grid of cubes rotating together with each cube randomly changing its size",src:o(1089).Z,title:"What you will build in this tutorial",width:"582",height:"328"})),(0,n.kt)("p",null,"You'll be using JavaScript and ",(0,n.kt)("a",{parentName:"p",href:"https://threejs.org/"},"three.js")," for this project. Three.js is a general purpose 3D graphics library that works well in modern web browsers such as Chrome, Edge, Firefox, and Safari."),(0,n.kt)("h2",{id:"who-this-tutorial-is-for"},"Who this tutorial is for"),(0,n.kt)("p",null,"This tutorial is for anyone who wants to use programming as a way to create visual expressions and who has some experience with JavaScript. This tutorial is not an introduction to programming. If you're not already familiar with concepts such as variables, types, arrays, objects, loops, conditional statements, and functions, you should complete an introductory tutorial first. You'll find links to introductory JavaScript tutorials in the ",(0,n.kt)("a",{parentName:"p",href:"#learning-javascript"},'"Additional resources"')," section below."),(0,n.kt)("p",null,"Many existing tutorials provide a quick how-to demonstration for a particular technology. There are also many tutorials about how to build a copy of an existing work. Both types are useful, but neither provides a structured platform for continued learning and experimentation."),(0,n.kt)("p",null,"This tutorial aims to fill that gap. Because the goal of this tutorial is to leave you with tools you can reuse, you'll find that it is longer than most introductory tutorials. By the end of this tutorial you'll have a platform and starting example to continue working with. With these at hand, you'll be able to get started more quickly on your own creative coding projects."),(0,n.kt)("p",null,"If you are a more experienced JavaScript developer, you may still find this tutorial to be a helpful introduction to three.js. Keep in mind, however, that the code is structured towards helping those with less programming experience experiment with 3D graphics. This means that optimizations and adherence to certain production patterns have been given less priority than clarity and readability."),(0,n.kt)("h2",{id:"how-this-tutorial-is-structured"},"How this tutorial is structured"),(0,n.kt)("p",null,'This tutorial is split into three modules that build on each other. The first module, "',(0,n.kt)("a",{parentName:"p",href:"scene-setup"},"Setting up a scene"),'," guides you through assembling the foundation that the remainder of the tutorial builds on. The second module, "',(0,n.kt)("a",{parentName:"p",href:"adding-objects"},"Adding objects"),'," will show you how to add objects to your scene and do a basic animation. Finally, in the third module, "',(0,n.kt)("a",{parentName:"p",href:"adding-behavior"},"Adding behavior"),",\" you'll add some basic behavior to the objects in your scene."),(0,n.kt)("p",null,"At the end of each module, you'll find a postscript and a checkpoint. The postscript offers some optional exercises to try with the code and additional resources that are relevant to the module. The checkpoint contains all the code you've assembled in the module, and they exist to provide you with a safety net for experimentation. So try things, experiment, and break things. You can use the checkpoints to quickly get back to a working state."),(0,n.kt)("h2",{id:"how-to-enter-the-code"},"How to enter the code"),(0,n.kt)("p",null,"The tutorial is written with an online code playground in mind and was tested with ",(0,n.kt)("a",{parentName:"p",href:"https://jsfiddle.net"},"JSFiddle"),'. See the "',(0,n.kt)("a",{parentName:"p",href:"#online-code-playgrounds"},"Additional resources"),'" section below for more options. Familiarize yourself with your code playground before you start this tutorial.'),(0,n.kt)("p",null,"As you progress through each section, you'll be shown additional blocks of JavaScript code. Copy and paste each of these blocks at the end of the JavaScript panel of your code playground."),(0,n.kt)("p",null,"If you are an experienced JavaScript developer, you likely already have a preferred development workflow. This tutorial should fit into that workflow as well."),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("p",null,"Throughout the tutorial, you'll find links to additional resources. These are provided in the hope that they may be useful. Reasonable effort has been made to ensure their soundness, but their presence should not be taken as an endorsement."),(0,n.kt)("h3",{id:"online-code-playgrounds"},"Online code playgrounds"),(0,n.kt)("p",null,"There are many online code playgrounds. Most offer some level of free usage, but many require you to create an account before using them. Be sure to review the privacy policy of any online service you use."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codepen.io/"},"CodePen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/"},"CodeSandbox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://glitch.com/"},"Glitch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jsfiddle.net"},"JSFiddle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://playcode.io/"},"PLAYCODE"))),(0,n.kt)("h3",{id:"learning-javascript"},"Learning JavaScript"),(0,n.kt)("p",null,"If you are completely new to JavaScript, or programming in general, you may find one of the resources below useful."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/computing/computer-programming/programming"},"Intro to JS: Drawing & Animation")," - this free course is a good introduction to JavaScript if you are completely new to programming"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/full-javascript-course-for-beginners/"},"JavaScript tutorial at freeCodeCamp")," - this is another JavaScript introduction for people new to programming"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://javascript.info/"},"The Modern JavaScript Tutorial")," - this tutorial will be useful if you have experience with another programming language and want to explore JavaScript by topic")),(0,n.kt)("h2",{id:"free-culture-copyright"},"Free culture copyright"),(0,n.kt)("p",null,"The contents of this tutorial are licensed under a Creative Commons ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"Attribution-ShareAlike")," license. The source code used for the tutorial demos is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT License"),"."))}h.isMDXComponent=!0},1089:function(e,t,o){t.Z=o.p+"assets/images/finished-project-4e5ae0251f49ca667516ddbf871c945a.gif"}}]);