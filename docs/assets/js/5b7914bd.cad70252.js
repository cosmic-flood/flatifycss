"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[743],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),d=l,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2695:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),l=n(3366),a=n(7294),i=["children","disableFullscreen"];function s(e){var t=e.children,n=e.disableFullscreen,s=(0,l.Z)(e,i),c=(0,a.useState)(!1),o=c[0],u=c[1];return a.createElement("div",{className:"preview-box-wrapper"},!n&&a.createElement("button",{"aria-label":o?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");o?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),u(!o)}},o?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",className:"docus-preview-box"+(o?" is-fullscreen":""),srcDoc:t},s)))}},9553:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=n(2695),s=["components"],c={title:"Pulse",sidebar_position:1},o=void 0,u={unversionedId:"helpers/pulse",id:"helpers/pulse",isDocsHomePage:!1,title:"Pulse",description:".pulse is a helper class that gives animation to the element ::after so it will get users' attention where is it necessary.",source:"@site/docs/helpers/pulse.mdx",sourceDirName:"helpers",slug:"/helpers/pulse",permalink:"/flatifycss/docs/helpers/pulse",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/helpers/pulse.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Pulse",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modals",permalink:"/flatifycss/docs/components/modal"},next:{title:"Alignment",permalink:"/flatifycss/docs/helpers/alignment"}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".pulse")," is a helper class that gives animation to the element ",(0,a.kt)("inlineCode",{parentName:"p"},"::after")," so it will get users' attention where is it necessary."),(0,a.kt)(i.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Pulse</title> <style> .my-box{ width: 150px; height: 100px; margin: 50px; } @media screen and (max-width: 650px){ .flex-center{ flex-wrap: wrap; } .my-box { width: 40% !important; } } </style> </head> <body> <div class="flex-center"> <div class="my-box style-blue pulse flex-center edge-round-md">Hello!</div> <div class="my-box style-orange pulse flex-center edge-round-md">Hola!</div> <div class="my-box style-green pulse flex-center edge-round-md">Salut!</div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="pulse my-box style-blue flex-center edge-round-md">Hello!</div>\n<div class="pulse my-box style-orange flex-center edge-round-md">Hola!</div>\n<div class="pulse my-box style-green flex-center edge-round-md">Salut!</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-box {\n    width: 150px;\n    height: 100px;\n    margin: 50px;\n}\n")))}d.isMDXComponent=!0}}]);