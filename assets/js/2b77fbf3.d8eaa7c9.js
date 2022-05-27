"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[6876],{6432:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return d}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),s=["components"],u={contributors:"Adrian F\xe2ciu"},l="Angular dependencies",o={unversionedId:"fundamentals/angular-dependencies",id:"fundamentals/angular-dependencies",title:"Angular dependencies",description:"Suggested resources",source:"@site/docs/fundamentals/angular-dependencies.md",sourceDirName:"fundamentals",slug:"/fundamentals/angular-dependencies",permalink:"/angular-guides/docs/fundamentals/angular-dependencies",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/fundamentals/angular-dependencies.md",tags:[],version:"current",frontMatter:{contributors:"Adrian F\xe2ciu"},sidebar:"guidesSidebar",previous:{title:"Angular components",permalink:"/angular-guides/docs/fundamentals/angular-components"},next:{title:"Angular directives",permalink:"/angular-guides/docs/fundamentals/angular-directives"}},c={},d=[{value:"Suggested resources",id:"suggested-resources",level:2},{value:"Suggested topics",id:"suggested-topics",level:2},{value:"Types of Angular dependencies",id:"types-of-angular-dependencies",level:3},{value:"Related topics",id:"related-topics",level:2}],p={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"angular-dependencies"},"Angular dependencies"),(0,i.kt)("h2",{id:"suggested-resources"},"Suggested resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.angularindepth.com/tree-shakable-dependencies-in-angular-projects-5aaa7012b9e7"},"Tree-shakable Dependencies in Angular Projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.angularindepth.com/faking-dependencies-in-angular-applications-3fc501d70c2e"},"Faking Dependencies in Angular Applications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.angularindepth.com/testing-and-faking-angular-dependencies-886495057121"},"Testing and Faking Angular Dependencies"))),(0,i.kt)("h2",{id:"suggested-topics"},"Suggested topics"),(0,i.kt)("h3",{id:"types-of-angular-dependencies"},"Types of Angular dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Constant values"),(0,i.kt)("li",{parentName:"ul"},"Function dependencies"),(0,i.kt)("li",{parentName:"ul"},"Factories"),(0,i.kt)("li",{parentName:"ul"},"(Class-based services)"),(0,i.kt)("li",{parentName:"ul"},"Dependency injection tokens")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./class-based-angular-services"},"Class-based Angular services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./how-change-detection-works-in-angular-projects"},"How change detection works in Angular projects"))))}g.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(t),g=a,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);