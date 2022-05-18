"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[8458],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7741:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},c="The BLoC pattern",u={unversionedId:"design-patterns/the-bloc-pattern",id:"design-patterns/the-bloc-pattern",title:"The BLoC pattern",description:"You want cross-platform code-sharing?",source:"@site/docs/design-patterns/the-bloc-pattern.md",sourceDirName:"design-patterns",slug:"/design-patterns/the-bloc-pattern",permalink:"/angular-guides/docs/design-patterns/the-bloc-pattern",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/design-patterns/the-bloc-pattern.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Presentational components",permalink:"/angular-guides/docs/design-patterns/presentational-components"},next:{title:"Frameworks and libraries",permalink:"/angular-guides/docs/category/frameworks-and-libraries"}},l={},p=[{value:"Suggested resources",id:"suggested-resources",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-bloc-pattern"},"The BLoC pattern"),(0,a.kt)("p",null,"You want cross-platform code-sharing?"),(0,a.kt)("p",null,"Use the BLoC pattern or to extract common business logic  that can be shared\nbetween similar components for different platforms."),(0,a.kt)("h2",{id:"suggested-resources"},"Suggested resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/lacolaco-blog/bloc-design-pattern-with-angular-1c2f0339f6a3"},"BLoC design pattern with Angular")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@LayZeeDK/very-interesting-suguru-thank-you-for-sharing-ec3c2dc7e82e"},"Comparison to Model-View-Presenter"))))}f.isMDXComponent=!0}}]);