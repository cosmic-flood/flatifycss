"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2695:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7462),o=n(3366),i=n(7294),l=["children","disableFullscreen"];function r(e){var t=e.children,n=e.disableFullscreen,r=(0,o.Z)(e,l),s=(0,i.useState)(!1),c=s[0],u=s[1];return i.createElement("div",{className:"preview-box-wrapper"},!n&&i.createElement("button",{"aria-label":c?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");c?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),u(!c)}},c?i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},i.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},i.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),i.createElement("iframe",(0,a.Z)({width:"100%",className:"docus-preview-box"+(c?" is-fullscreen":""),srcDoc:t},r)))}},2544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=n(2695),r=["components"],s={title:"Blockquote"},c=void 0,u={unversionedId:"content/blockquote",id:"content/blockquote",isDocsHomePage:!1,title:"Blockquote",description:"Default",source:"@site/docs/content/blockquote.mdx",sourceDirName:"content",slug:"/content/blockquote",permalink:"/flatifycss/docs/content/blockquote",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/content/blockquote.mdx",tags:[],version:"current",frontMatter:{title:"Blockquote"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/flatifycss/docs/intro"},next:{title:"Figure and image",permalink:"/flatifycss/docs/content/figure"}},m=[{value:"Default",id:"default",children:[],level:3},{value:"Large",id:"large",children:[],level:3},{value:"Customization",id:"customization",children:[],level:3},{value:"Change quote icon",id:"change-quote-icon",children:[],level:3}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"default"},"Default"),(0,i.kt)("p",null,"To write a quote Flatify CSS gives two types of ",(0,i.kt)("inlineCode",{parentName:"p"},"<blockquote>"),"s, first one is a default blockquote:"),(0,i.kt)(l.Z,{height:"180px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Quote</title> </head> <body> <blockquote style="margin-bottom: 0"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote>         </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<blockquote>\n    <p>\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam\n        malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.\n    </p>\n    <cite>John Doe</cite>\n</blockquote>\n")),(0,i.kt)("h3",{id:"large"},"Large"),(0,i.kt)("p",null,"To have a large blockquote add ",(0,i.kt)("inlineCode",{parentName:"p"},".large")," to the blockquote."),(0,i.kt)(l.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Quote</title> </head> <body> <blockquote class="large" style="margin-bottom: 0"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote>         </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<blockquote class="large">...</blockquote>\n')),(0,i.kt)("h3",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Blockquotes can have different accent colors or use ",(0,i.kt)("a",{parentName:"p",href:"docs/helpers/color-setters"},"color setter classes"),"."),(0,i.kt)(l.Z,{height:"565px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Quote</title> <style> .my-blockquote{ --flatify__blockquote-accent-color: #ff9600; } </style> </head> <body> <blockquote class="my-blockquote"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote> <blockquote class="style-green"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote> <blockquote class="large style-red" style="margin-bottom: 0"> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <cite>John Doe</cite> </blockquote> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<blockquote class="my-blockquote">...</blockquote>\n\n<blockquote class="style-green">...</blockquote>\n\n<blockquote class="large style-red">...</blockquote>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'{2} title="style.css"',"{2}":!0,title:'"style.css"'},".my-blockquote {\n    --flatify__blockquote-accent-color: #ff9600;\n}\n")),(0,i.kt)("h3",{id:"change-quote-icon"},"Change quote icon"),(0,i.kt)("p",null,"It is possible to change the blockquote icon with both ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.scss")," and CSS variables."),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.scss")," find ",(0,i.kt)("inlineCode",{parentName:"p"},"$BLOCKQUOTE_ICON")," and set svg of customized icon with this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="_config.scss"',title:'"_config.scss"'},'$BLOCKQUOTE_ICON: url("data:image/svg+xml; utf8, YOUR SVG CODE HERE");\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,"change its CSS variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},'--flatify__blockquote-icon: url("data:image/svg+xml; utf8, YOUR SVG CODE HERE");\n')))}d.isMDXComponent=!0}}]);