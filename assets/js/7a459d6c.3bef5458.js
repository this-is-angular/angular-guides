"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[282],{7187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],s={contributors:"Jia Li Passion, Andrew Evans"},l="Testing Angular projects",p={unversionedId:"testing/testing-angular-projects",id:"testing/testing-angular-projects",title:"Testing Angular projects",description:"Suggested topics",source:"@site/docs/testing/testing-angular-projects.md",sourceDirName:"testing",slug:"/testing/testing-angular-projects",permalink:"/angular-guides/docs/testing/testing-angular-projects",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/testing/testing-angular-projects.md",tags:[],version:"current",frontMatter:{contributors:"Jia Li Passion, Andrew Evans"},sidebar:"guidesSidebar",previous:{title:"Test-driven development (TDD)",permalink:"/angular-guides/docs/testing/test-driven-development-tdd"},next:{title:"Testing strategies",permalink:"/angular-guides/docs/testing/testing-strategies"}},c={},m=[{value:"Suggested topics",id:"suggested-topics",level:2},{value:"Testing with or without the <code>TestBed</code>?",id:"testing-with-or-without-the-testbed",level:3},{value:"Types of tests",id:"types-of-tests",level:3},{value:"Zone.js",id:"zonejs",level:3},{value:"Angular Component Testing",id:"angular-component-testing",level:3},{value:"Isolated Component Tests",id:"isolated-component-tests",level:4},{value:"Shallow component tests",id:"shallow-component-tests",level:4},{value:"Integrated component tests",id:"integrated-component-tests",level:4}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-angular-projects"},"Testing Angular projects"),(0,r.kt)("h2",{id:"suggested-topics"},"Suggested topics"),(0,r.kt)("h3",{id:"testing-with-or-without-the-testbed"},"Testing with or without the ",(0,r.kt)("inlineCode",{parentName:"h3"},"TestBed"),"?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TestBed")," dependency injection vs. manual constructor injection"),(0,r.kt)("li",{parentName:"ul"},"Compilation penalty"),(0,r.kt)("li",{parentName:"ul"},"External files penalty")),(0,r.kt)("h3",{id:"types-of-tests"},"Types of tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Angular component testing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Isolated component tests"),(0,r.kt)("li",{parentName:"ul"},"Shallow component tests"),(0,r.kt)("li",{parentName:"ul"},"Integrated component tests"))),(0,r.kt)("li",{parentName:"ul"},"Pipe testing"),(0,r.kt)("li",{parentName:"ul"},"Dependency testing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class-based service tests"),(0,r.kt)("li",{parentName:"ul"},"Injection token tests"),(0,r.kt)("li",{parentName:"ul"},"Function tests"),(0,r.kt)("li",{parentName:"ul"},"Constant value tests"))),(0,r.kt)("li",{parentName:"ul"},"Directive testing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Isolated directive tests"),(0,r.kt)("li",{parentName:"ul"},"Host component tests")))),(0,r.kt)("h3",{id:"zonejs"},"Zone.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fakeAsync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"async")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sync")),(0,r.kt)("li",{parentName:"ul"},"Jasmine integration")),(0,r.kt)("h3",{id:"angular-component-testing"},"Angular Component Testing"),(0,r.kt)("p",null,"Component testing in Angular typically has three flavors:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Isolated")," - tests that do not render the component, mock any dependencies, and follow the same pattern that you would to testa a JavaScript object.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Shallow Tests")," - tests only the component itself and none of its children (subcomponents)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Integrated Tests")," - tests that test the entire functionality of the component in question"))),(0,r.kt)("p",null,"For the purposes of this guide, we're going to refer to a weather forecast application.  The application has one main component with two subcomponents (children) that show a the ",(0,r.kt)("inlineCode",{parentName:"p"},"current weather")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"forecast information"),"."),(0,r.kt)("p",null,"The component we're going to test has the following template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="jumbotron">\n  <div class="container">\n    <div class="row">\n      <div class="col-sm">\n        <h1 class="display-4">Weather App</h1>\n        <p class="lead">This is a simple weather app that uses the NOAA APIs and the OpenWeatherMap API to show details of your local weather</p>\n      </div>\n      <div class="col-sm">\n        <img class="header-image" src=\'../assets/images/Header_Image.png\'>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="container">\n  <div class="row">\n    <div class="col-sm">\n      <h1>Current Weather</h1>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-sm">\n      <app-current-weather [weatherDisplay] = "weatherDisplay"></app-current-weather>\n    </div>\n  </div>\n</div>\n<div class="container">\n  <div class="row">\n    <div class="col-sm">\n      <h1>Today\'s Forecast</h1>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-sm">\n      <app-forecast [weatherDisplay] = "weatherDisplay"></app-forecast>\n    </div>\n  </div>\n</div>\n\n')),(0,r.kt)("p",null,"The same application also has this associated class definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component, OnInit } from '@angular/core';\nimport { WeatherService } from './services/weather.service';\nimport { WeatherDisplay } from './models/weatherDisplay';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent implements OnInit {\n  lat: string;\n  long: string;\n  weatherDisplay: WeatherDisplay = new WeatherDisplay();\n\n  constructor(public weatherService: WeatherService) { }\n\n  ngOnInit(): void {\n    try {\n      navigator.geolocation.getCurrentPosition((position) => {\n        this.savePosition(position);\n      });\n    } catch (error) {\n      alert('Browser does not support location services');\n    }\n  }\n\n  savePosition(position) {\n    this.lat = position.coords.latitude.toFixed(4).toString();\n    this.long = position.coords.longitude.toFixed(4).toString();\n\n      this.weatherService.getWeather(this.lat, this.long)\n      .then(\n        function(success) {\n          this.weatherDisplay = success;\n          if (this.weatherDisplay.errorMessage !== undefined) {\n            alert(this.weatherDisplay.errorMessage);\n          }\n        }.bind(this),\n        function(error) {\n          alert(error);\n          this.weatherDisplay = new WeatherDisplay();\n        }.bind(this)\n      );\n  }\n\n}\n")),(0,r.kt)("p",null,"The following sections will go into more detail and use this template and class definition for reference."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"One big disclaimer here, this does not cover all cases.  We're just highlighting examples of tests that you can run.")),(0,r.kt)("h4",{id:"isolated-component-tests"},"Isolated Component Tests"),(0,r.kt)("p",null,"As mentioned in the intro, ",(0,r.kt)("strong",{parentName:"p"},"Isolated Tests")," treat a component as a JavaScript object.  This makes the test pretty straightforward because it means you mock any service calls and just focus on the actual JavaScript that composes the object."),(0,r.kt)("p",null,"For our weather component, an isolated test would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { fakeAsync, flushMicrotasks } from '@angular/core/testing';\nimport { AppComponent } from './app.component';\nimport { ForecastComponent } from './components/forecast/forecast.component';\nimport { WeatherService } from './services/weather.service';\n\ndescribe('AppComponent', () => {\n  let component: AppComponent;\n  let weatherService: WeatherService;\n\n  beforeEach(() => {\n    weatherService = new WeatherService();\n    component = new AppComponent(weatherService);\n  });\n\n  it('should call the HTML5 geolocation api and return coordinates', fakeAsync(() => {\n    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {\n      const position = { coords: { latitude: 1234.0000, longitude: 5678.0000 } };\n      arguments[0](position);\n    });\n    component.ngOnInit();\n    flushMicrotasks();\n    expect(component.lat).toEqual('1234.0000');\n    expect(component.long).toEqual('5678.0000');\n  }));\n});\n")),(0,r.kt)("p",null,"As you can see in the example the test fully mocks the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentPosition")," method of the HTML5 geolocation api that is called.  What is actually being tested here is just the component's underlying method call, and not the actual rendering that occurs.  We could do the same for the ",(0,r.kt)("inlineCode",{parentName:"p"},"savePosition")," method, but that was left out for brevity.  Also notice the lack of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed")," class from the core angular testing library.  We leave out the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestBed")," here to show that the isolated test is focused on the component and does not include DOM testing."),(0,r.kt)("h4",{id:"shallow-component-tests"},"Shallow component tests"),(0,r.kt)("p",null,"To repeat what was stated earlier, ",(0,r.kt)("strong",{parentName:"p"},"shallow tests")," focus on one component and ignore any subcomponents that may exist.  If you notice in our template, there is an ",(0,r.kt)("inlineCode",{parentName:"p"},"app-current-weather")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"app-forecast")," component referenced.  We're going to just write tests on this main ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," component that you see here and not the children.  So an exmaple test here would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TestBed, async, ComponentFixture, fakeAsync, flushMicrotasks, tick} from '@angular/core/testing';\nimport { AppComponent } from './app.component';\nimport { CurrentWeatherComponent } from './components/current-weather/current-weather.component';\nimport { ForecastComponent } from './components/forecast/forecast.component';\nimport { HttpClientTestingModule } from '@angular/common/http/testing';\nimport { WeatherService } from './services/weather.service';\nimport { WeatherDisplay } from './models/weatherDisplay';\nimport { DebugElement } from '@angular/core';\nimport { MaterialModule } from './material/material.module';\n\ndescribe('AppComponent', () => {\n  let component: AppComponent;\n  let fixture: ComponentFixture<AppComponent>;\n  const weatherDisplay: WeatherDisplay = require('../assets/testing/weather-display.json');\n  let weatherService: WeatherService;\n  let debugElement: DebugElement;\n\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      declarations: [\n        AppComponent,\n        CurrentWeatherComponent,\n        ForecastComponent\n      ],\n      providers: [ WeatherService ],\n      imports: [\n        HttpClientTestingModule, MaterialModule\n      ]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(AppComponent);\n    debugElement = fixture.debugElement;\n  }));\n\n  it('should verify that the component titles are correct', () => {\n    expect(debugElement.nativeElement)toHaveText('Weather App');\n    expect(debugElement.nativeElement).toHaveText('This is a simple weather app');\n    expect(debugElement.nativeElement)toHaveText('Current Weather');\n    expect(debugElement.nativeElement).toHaveText('Today\\'s Forecast');\n  });\n});\n")),(0,r.kt)("p",null,"As you can see, this test only tests the heading text that is shown.  If you had more mock data, you could also interrogate that.  The main point is to test the component without any of its subchildren.  Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"weatherService")," affects the children components, we did not test them here."),(0,r.kt)("h4",{id:"integrated-component-tests"},"Integrated component tests"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"integrated component tests")," actually test the component rendering from end to end.  This is specifically for a matter of correctness of the output.  We will still mock the service calls, but we will be testing to see how the data is rendered.  The component we are working with is good for this case since it is essentially a Single Page Application (SPA) and only references two subchildren.  So the integrated test should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TestBed, async, ComponentFixture, fakeAsync, flushMicrotasks, tick} from '@angular/core/testing';\nimport { AppComponent } from './app.component';\nimport { CurrentWeatherComponent } from './components/current-weather/current-weather.component';\nimport { ForecastComponent } from './components/forecast/forecast.component';\nimport { HttpClientTestingModule } from '@angular/common/http/testing';\nimport { WeatherService } from './services/weather.service';\nimport { WeatherDisplay } from './models/weatherDisplay';\nimport { DebugElement } from '@angular/core';\nimport { MaterialModule } from './material/material.module';\n\ndescribe('AppComponent', () => {\n  let component: AppComponent;\n  let fixture: ComponentFixture<AppComponent>;\n  const weatherDisplay: WeatherDisplay = require('../assets/testing/weather-display.json');\n  let weatherService: WeatherService;\n  let debugElement: DebugElement;\n\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      declarations: [\n        AppComponent,\n        CurrentWeatherComponent,\n        ForecastComponent\n      ],\n      providers: [ WeatherService ],\n      imports: [\n        HttpClientTestingModule, MaterialModule\n      ]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(AppComponent);\n    debugElement = fixture.debugElement;\n    component = fixture.componentInstance;\n    weatherService = debugElement.injector.get(WeatherService);\n  }));\n\n  it('should populate the weatherDisplay value when WeatherService is called', fakeAsync(() => {\n    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {\n      const position = { coords: { latitude: 37.6584, longitude: -77.6526 } };\n      arguments[0](position);\n    });\n    spyOn(weatherService, 'getWeather').and.returnValue(Promise.resolve(weatherDisplay));\n    component.ngOnInit();\n    flushMicrotasks();\n    expect(component.weatherDisplay).toEqual(weatherDisplay);\n  }));\n});\n")),(0,r.kt)("p",null,"As you can see from the example, the test that was written is using mock data for both the HTML5 geolocation API call to ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentPosition")," as well as the service call's ",(0,r.kt)("inlineCode",{parentName:"p"},"getWeather")," method.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"weatherDisplay")," value is a fully mocked response (read in from a local json file).  The test here tests the rendering of the application to include both the main component and its children (here the ",(0,r.kt)("inlineCode",{parentName:"p"},"WeatherDisplay")," component)."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);