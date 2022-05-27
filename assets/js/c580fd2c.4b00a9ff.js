"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[5344],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),s=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=s(n.components);return o.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,i(i({ref:e},c),{},{components:t})):o.createElement(f,i({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4287:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],p={},l="Bootstrapping a standalone application",s={unversionedId:"standalone-apis/bootstrapping-a-standalone-application",id:"standalone-apis/bootstrapping-a-standalone-application",title:"Bootstrapping a standalone application",description:"Using the bootstrapApplication function",source:"@site/docs/standalone-apis/bootstrapping-a-standalone-application.md",sourceDirName:"standalone-apis",slug:"/standalone-apis/bootstrapping-a-standalone-application",permalink:"/angular-guides/docs/standalone-apis/bootstrapping-a-standalone-application",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/standalone-apis/bootstrapping-a-standalone-application.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Adding top-level routes to a standalone Angular application",permalink:"/angular-guides/docs/standalone-apis/adding-top-level-routes-to-a-standalone-angular-application"},next:{title:"Enabling animations in a standalone Angular application",permalink:"/angular-guides/docs/standalone-apis/enabling-animations-in-a-standalone-angular-application"}},c={},d=[{value:"Using the bootstrapApplication function",id:"using-the-bootstrapapplication-function",level:2},{value:"Application-wide providers",id:"application-wide-providers",level:2},{value:"Using providers from NgModules",id:"using-providers-from-ngmodules",level:2}],u={toc:d};function m(n){var e=n.components,t=(0,r.Z)(n,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bootstrapping-a-standalone-application"},"Bootstrapping a standalone application"),(0,a.kt)("h2",{id:"using-the-bootstrapapplication-function"},"Using the bootstrapApplication function"),(0,a.kt)("p",null,"A standalone Angular application bootstraps a component often called the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppComponent"),", making it the root component of our application. We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrapApplication")," function to do this. It accepts the class of the root component as its first parameter and optionally an object with a ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," property that contains an array of application-wide providers."),(0,a.kt)("p",null,"The following code block lists a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"main.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { enableProdMode } from "@angular/core";\nimport { bootstrapApplication } from "@angular/platform-browser";\n\nimport { AppComponent } from "./app/app.component";\nimport { environment } from "./environments/environment";\n\nif (environment.production) {\n  enableProdMode();\n}\n\nbootstrapApplication(AppComponent).catch((err) => console.error(err));\n')),(0,a.kt)("h2",{id:"application-wide-providers"},"Application-wide providers"),(0,a.kt)("p",null,"To add a root-level provider, we can add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { enableProdMode } from "@angular/core";\nimport { bootstrapApplication } from "@angular/platform-browser";\n\nimport { AppComponent } from "./app/app.component";\nimport { environment } from "./environments/environment";\n\nif (environment.production) {\n  enableProdMode();\n}\n\nbootstrapApplication(AppComponent, {\n  providers: [AuthService],\n}).catch((err) => console.error(err));\n')),(0,a.kt)("h2",{id:"using-providers-from-ngmodules"},"Using providers from NgModules"),(0,a.kt)("p",null,"To provide root-level providers using an NgModule, we pass the NgModule to the ",(0,a.kt)("inlineCode",{parentName:"p"},"importProvidersFrom")," function."),(0,a.kt)("p",null,"For example, we can provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient"),"'s dependencies as shown in the following listing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { HttpClientModule } from "@angular/common/http";\nimport { enableProdMode, importProvidersFrom } from "@angular/core";\nimport { bootstrapApplication } from "@angular/platform-browser";\n\nimport { AppComponent } from "./app/app.component";\nimport { environment } from "./environments/environment";\n\nif (environment.production) {\n  enableProdMode();\n}\n\nbootstrapApplication(AppComponent, {\n  providers: [importProvidersFrom(HttpClientModule)],\n}).catch((err) => console.error(err));\n')))}m.isMDXComponent=!0}}]);