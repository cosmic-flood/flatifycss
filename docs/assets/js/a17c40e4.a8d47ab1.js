"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2119],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Development"},l=void 0,p={unversionedId:"overview/development",id:"overview/development",isDocsHomePage:!1,title:"Development",description:"FlatifyCSS is written in Sass, which we compile to CSS & JavaScript using Gulp, in this page we will cover the development process.",source:"@site/docs/overview/development.mdx",sourceDirName:"overview",slug:"/overview/development",permalink:"/flatifycss/docs/overview/development",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/overview/development.mdx",tags:[],version:"current",frontMatter:{title:"Development"},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/flatifycss/docs/overview/customization"},next:{title:"Grid system",permalink:"/flatifycss/docs/overview/grid-system"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"Sass",id:"sass",children:[],level:2},{value:"JavaScript",id:"javascript",children:[],level:2},{value:"Gulp tasks",id:"gulp-tasks",children:[{value:"gulp",id:"gulp",children:[],level:3},{value:"gulp watch",id:"gulp-watch",children:[],level:3},{value:"gulp release",id:"gulp-release",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FlatifyCSS is written in ",(0,r.kt)("a",{parentName:"p",href:"https://sass-lang.com/"},"Sass"),", which we compile to CSS & JavaScript using ",(0,r.kt)("a",{parentName:"p",href:"https://gulpjs.com/"},"Gulp"),", in this page we will cover the development process."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To use Gulp, we need to install it globally with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i gulp-cli -g"),", and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," in the root directory of FlatifyCSS. If everything is okay, we can run ",(0,r.kt)("inlineCode",{parentName:"p"},"gulp")," in the root directory to compile the FlatifyCSS stylesheet and JavaScript file."),(0,r.kt)("h2",{id:"sass"},"Sass"),(0,r.kt)("p",null,"In the root directory of FlatifyCSS, we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"/scss")," directory, which contains the Sass files we will use to build the FlatifyCSS stylesheet.\nThere are two files in this directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"flatify.scss")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flatify-rtl.scss"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"flatify.scss")," file is the main file we use to extend the base stylesheet, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"flatify-rtl.scss")," file is used to compile stylesheets for RTL.\nAfterward to write your code to extend the current features create a file e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"_my-file.scss")," and import it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"flatify.scss")," file."),(0,r.kt)("h2",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"JavaScript is the same as Sass, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/js")," directory use the ",(0,r.kt)("inlineCode",{parentName:"p"},"flatify.js")," file to extend features, we use Webpack so it is possible to use ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/module-methods/#es6-recommended"},"the import and export feature of ES6"),"."),(0,r.kt)("h2",{id:"gulp-tasks"},"Gulp tasks"),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"gulpfile.js")," all tasks are defined, you can use these tasks to compile files or watch for changes automatically."),(0,r.kt)("h3",{id:"gulp"},"gulp"),(0,r.kt)("p",null,"Run a single task to compile ",(0,r.kt)("inlineCode",{parentName:"p"},"scss")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," files, this is the default task and consider changes as ",(0,r.kt)("strong",{parentName:"p"},"prerelease"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Parameters")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ver")," parameter to set the desired version or use ",(0,r.kt)("inlineCode",{parentName:"p"},"--type")," to change the bump version type. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},'--ver "1.0.0"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'--type "minor"'),". The default bump version type is prerelease."))),(0,r.kt)("h3",{id:"gulp-watch"},"gulp watch"),(0,r.kt)("p",null,"Use this task to watch for changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scss")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," directories to compile them, note that this task use development settings to speed up the compile process, so generated files are not safe for product usage."),(0,r.kt)("h3",{id:"gulp-release"},"gulp release"),(0,r.kt)("p",null,"This task will create a release candidate, it will compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"scss")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," files, bump version with ",(0,r.kt)("strong",{parentName:"p"},"patch")," type, commit all changes and create a tag."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Parameters")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ver")," parameter to set the desired version or use ",(0,r.kt)("inlineCode",{parentName:"p"},"--type")," to change the bump version type. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},'--ver "1.0.0"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'--type "minor"'),". The default bump version type is patch.",(0,r.kt)("br",{parentName:"p"}),"\n","To change the commit and tag label you can set either ",(0,r.kt)("inlineCode",{parentName:"p"},"--m")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--desc")," parameters. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},'--m "Release 1.0.0"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'--desc "Release 1.0.0"'),"."))),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Prevent auto commit and tag")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To prevent auto commit and tag you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"--desc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--m")," parameters to empty string, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},'gulp release --m ""'),"."))))}d.isMDXComponent=!0}}]);