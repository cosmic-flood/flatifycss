"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[912],{1942:function(e,t,o){o.d(t,{Z:function(){return r}});var l=o(7294);function r(e){var t=e.color,o=e.title,r=e.inline;return l.createElement("div",{className:"docus-color-indicator flex-center-y "+(r?"inline":"")},l.createElement("div",{className:"docus-color",style:{backgroundColor:t}}),l.createElement("code",null,o))}},8677:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return n},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return y}});var l=o(7462),r=o(3366),s=(o(7294),o(3905)),c=o(2695),i=o(1942),a=["components"],n={title:"Opacity setters"},d=void 0,m={unversionedId:"helpers/opacity-setters",id:"helpers/opacity-setters",isDocsHomePage:!1,title:"Opacity setters",description:"Here is the list of practical helper classes to style elements,",source:"@site/docs/helpers/opacity-setters.mdx",sourceDirName:"helpers",slug:"/helpers/opacity-setters",permalink:"/FlatifyCSS/docs/helpers/opacity-setters",editUrl:"https://github.com/amir2mi/FlatifyCSS/tree/master/website/docs/helpers/opacity-setters.mdx",tags:[],version:"current",frontMatter:{title:"Opacity setters"},sidebar:"tutorialSidebar",previous:{title:"Colors setters",permalink:"/FlatifyCSS/docs/helpers/color-setters"}},p=[{value:"Main colors",id:"main-colors",children:[],level:3},{value:"Palette colors",id:"palette-colors",children:[],level:3},{value:"State colors",id:"state-colors",children:[],level:3},{value:"Text colors",id:"text-colors",children:[],level:3}],u={toc:p};function y(e){var t=e.components,o=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,l.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Here is the list of practical helper classes to style elements,\nfor example a button, table item, div, etc.",(0,s.kt)("br",{parentName:"p"}),"\n","What they do is pretty simple:\nset background, color, and border based on the color palette."),(0,s.kt)("h3",{id:"main-colors"},"Main colors"),(0,s.kt)(i.Z,{color:"#1cb0f6",title:".style-accent",inline:!0,mdxType:"ColorIndicator"})," Brings the UI primary color.",(0,s.kt)(c.Z,{height:"165px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Colors helper classes</title> <style> .my-box{ width: 200px; height: 100px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } </style> </head> <div class="flex-center"> <div class="my-box flex-center style-blue"> <p class="text-centered">Hello Everybody!</p> </div> <div class="my-box flex-center style-red"> <p class="text-centered">Hello Everybody!</p> </div> <div class="my-box flex-center style-green"> <p class="text-centered">Hello Everybody!</p> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1,5,9} title="index.html"',"{1,5,9}":!0,title:'"index.html"'},'<div class="my-box flex-center style-blue">\n    <p class="text-centered">Hello Everybody!</p>\n</div>\n\n<div class="my-box flex-center style-red">\n    <p class="text-centered">Hello Everybody!</p>\n</div>\n\n<div class="my-box flex-center style-green">\n    <p class="text-centered">Hello Everybody!</p>\n</div>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-box {\n    width: 200px;\n    height: 100px;\n    margin: 0.5em;\n    border: 0.25em solid;\n    border-radius: 1em;\n}\n")),(0,s.kt)("h3",{id:"palette-colors"},"Palette colors"),(0,s.kt)("p",null,"These colors can be declared from the ",(0,s.kt)("inlineCode",{parentName:"p"},"_config.scss")," file or reset with CSS,\nfor more information ",(0,s.kt)("a",{parentName:"p",href:"#"},"read this page."),"."),(0,s.kt)(i.Z,{color:"#1cb0f6",title:".style-blue",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#58cc02",title:".style-green",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#ffde00",title:".style-yellow",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#ff9600",title:".style-orange",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#ff4b4b",title:".style-red",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#ce82ff",title:".style-purple",mdxType:"ColorIndicator"}),(0,s.kt)("h3",{id:"state-colors"},"State colors"),(0,s.kt)("p",null,"Colors are an important part of expressing feelings in the process of designing a UI,\nthis helper classes are specifically here to help you achieve it."),(0,s.kt)(i.Z,{color:"#58cc02",title:".style-success",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#1cb0f6",title:".style-info",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#ff9600",title:".style-warning",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#ff4b4b",title:".style-danger",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#f1f4f7",title:".style-light",mdxType:"ColorIndicator"}),(0,s.kt)(i.Z,{color:"#2e4051",title:".style-dark",mdxType:"ColorIndicator"}),(0,s.kt)("h3",{id:"text-colors"},"Text colors"),(0,s.kt)("p",null,"There are also some useful classes for changing texts color."),(0,s.kt)("p",{className:"color-accent"},(0,s.kt)("code",null,".color-accent"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("br",null),(0,s.kt)("p",{className:"color-blue"},(0,s.kt)("code",null,".color-blue"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-green"},(0,s.kt)("code",null,".color-green"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-yellow"},(0,s.kt)("code",null,".color-yellow"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-orange"},(0,s.kt)("code",null,".color-orange"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-red"},(0,s.kt)("code",null,".color-red"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-purple"},(0,s.kt)("code",null,".color-purple"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("br",null),(0,s.kt)("p",{className:"color-success"},(0,s.kt)("code",null,".color-success"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-info"},(0,s.kt)("code",null,".color-info"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-warning"},(0,s.kt)("code",null,".color-warning"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-danger"},(0,s.kt)("code",null,".color-danger"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-light"},(0,s.kt)("code",{style:{background:"#292b36"}},".color-light"),"\xa0 Lorem ipsum dolor sit amet."),(0,s.kt)("p",{className:"color-dark"},(0,s.kt)("code",{style:{background:"#ced9e3"}},".color-dark"),"\xa0 Lorem ipsum dolor sit amet."))}y.isMDXComponent=!0}}]);