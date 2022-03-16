"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,u(u({ref:t},l),{},{components:n})):r.createElement(h,u({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],a={id:"scene-setup",title:"Setting up a scene",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},s=void 0,c={unversionedId:"scene-setup/scene-setup",id:"scene-setup/scene-setup",title:"Setting up a scene",description:"In this module, you'll build the foundation for the rest of the tutorial. This part isn't exciting, but it's necessary. What you build in this module will be useful when you begin experimenting on your own.",source:"@site/docs/scene-setup/scene-setup.mdx",sourceDirName:"scene-setup",slug:"/scene-setup/",permalink:"/ccodetut3js/scene-setup/",tags:[],version:"current",frontMatter:{id:"scene-setup",title:"Setting up a scene",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/ccodetut3js/"},next:{title:"Getting started",permalink:"/ccodetut3js/scene-setup/getting-started"}},l={},p=[{value:"How to skip ahead",id:"how-to-skip-ahead",level:2}],d={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this module, you'll build the foundation for the rest of the tutorial. This part isn't exciting, but it's necessary. What you build in this module will be useful when you begin experimenting on your own."),(0,i.kt)("p",null,"When you complete this module, you'll have a reusable template that you can use as the basis for future projects. After you've assembled these initial pieces, you'll create a short demo with a rotating cube to verify that everything is working."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Animation of a rotating cube produced by the demo at the end of this module",src:n(8987).Z,title:"This module's demo",width:"624",height:"332"})),(0,i.kt)("h2",{id:"how-to-skip-ahead"},"How to skip ahead"),(0,i.kt)("p",null,"If you'd rather jump directly to the visuals and skip the construction of the foundation, you can do that. At the end of this module, you'll find a ",(0,i.kt)("a",{parentName:"p",href:"scene-setup/checkpoint"},"checkpoint")," for this module. That page contains the complete HTML, CSS, and JavaScript code that is built in this module. Copy and paste each code block into the appropriate panel of your code playground. You'll then be ready to jump directly into the next module."),(0,i.kt)("p",null,"Return to this module when you are ready to review how this code was put together."))}f.isMDXComponent=!0},8987:function(e,t,n){t.Z=n.p+"assets/images/scene-setup-demo-72ae5178323b157c8953151b2222beff.gif"}}]);