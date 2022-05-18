"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[7322],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4028:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return g}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={},u="Build a web component library using Angular CLI and Angular Elements",c={unversionedId:"tooling/build-a-web-component-library-using-the-angular-cli-and-angular-elements",id:"tooling/build-a-web-component-library-using-the-angular-cli-and-angular-elements",title:"Build a web component library using Angular CLI and Angular Elements",description:"- Getting started with Angular Elements on Egghead.io",source:"@site/docs/tooling/build-a-web-component-library-using-the-angular-cli-and-angular-elements.md",sourceDirName:"tooling",slug:"/tooling/build-a-web-component-library-using-the-angular-cli-and-angular-elements",permalink:"/angular-guides/docs/tooling/build-a-web-component-library-using-the-angular-cli-and-angular-elements",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/tooling/build-a-web-component-library-using-the-angular-cli-and-angular-elements.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Build a multi-application Angular CLI workspace",permalink:"/angular-guides/docs/tooling/build-a-multi-application-angular-cli-workspace"},next:{title:"Build an Angular library using Angular CLI and ng-packagr",permalink:"/angular-guides/docs/tooling/build-an-angular-library-using-the-angular-cli-and-ng-packagr"}},s={},g=[{value:"Suggested topics",id:"suggested-topics",level:2}],p={toc:g};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-a-web-component-library-using-angular-cli-and-angular-elements"},"Build a web component library using Angular CLI and Angular Elements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://egghead.io/courses/getting-started-with-angular-elements?utm_content=getting-started-with-angular-elements"},"Getting started with Angular Elements on Egghead.io"))),(0,i.kt)("h2",{id:"suggested-topics"},"Suggested topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Slots"),(0,i.kt)("li",{parentName:"ul"},"ShadowDOM"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<ng-content>")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"<slot>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<ng-content select="app-example-item">')," -> ",(0,i.kt)("inlineCode",{parentName:"li"},'<slot name="app-example-item">')),(0,i.kt)("li",{parentName:"ul"},"Input properties -> attributes"),(0,i.kt)("li",{parentName:"ul"},"Output properties -> custom events")))}d.isMDXComponent=!0}}]);