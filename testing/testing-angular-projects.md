---
contributors: Jia Li Passion, Andrew Evans
---

# Testing Angular projects

## Suggested topics
### Testing with or without the `TestBed`?
- `TestBed` dependency injection vs. manual constructor injection
- Compilation penalty
- External files penalty

### Types of tests
- Angular component testing
  - Isolated component tests
  - Shallow component tests
  - Integrated component tests
- Pipe testing
- Dependency testing
  - Class-based service tests
  - Injection token tests
  - Function tests
  - Constant value tests
- Directive testing
  - Isolated directive tests
  - Host component tests

### Zone.js
- `fakeAsync`
- `async`
- `sync`
- Jasmine integration

### Angular Component Testing

Component testing in Angular typically has three flavors:
1. __Isolated__ - tests that do not render the component, mock any dependencies, and follow the same pattern that you would to testa a JavaScript object.

2. __Shallow Tests__ - tests only the component itself and none of its children (subcomponents)

3. __Integrated Tests__ - tests that test the entire functionality of the component in question

For the purposes of this guide, we're going to refer to a weather forecast application.  The application has one main component with two subcomponents (children) that show a the `current weather` and `forecast information`.

The component we're going to test has the following template:

```html
<div class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h1 class="display-4">Weather App</h1>
        <p class="lead">This is a simple weather app that uses the NOAA APIs and the OpenWeatherMap API to show details of your local weather</p>
      </div>
      <div class="col-sm">
        <img class="header-image" src='../assets/images/Header_Image.png'>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h1>Current Weather</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <app-current-weather [weatherDisplay] = "weatherDisplay"></app-current-weather>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h1>Today's Forecast</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <app-forecast [weatherDisplay] = "weatherDisplay"></app-forecast>
    </div>
  </div>
</div>

```

The same application also has this associated class definition:

```ts
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherDisplay } from './models/weatherDisplay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: string;
  long: string;
  weatherDisplay: WeatherDisplay = new WeatherDisplay();

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        this.savePosition(position);
      });
    } catch (error) {
      alert('Browser does not support location services');
    }
  }

  savePosition(position) {
    this.lat = position.coords.latitude.toFixed(4).toString();
    this.long = position.coords.longitude.toFixed(4).toString();

      this.weatherService.getWeather(this.lat, this.long)
      .then(
        function(success) {
          this.weatherDisplay = success;
          if (this.weatherDisplay.errorMessage !== undefined) {
            alert(this.weatherDisplay.errorMessage);
          }
        }.bind(this),
        function(error) {
          alert(error);
          this.weatherDisplay = new WeatherDisplay();
        }.bind(this)
      );
  }

}
```

The following sections will go into more detail and use this template and class definition for reference.

_One big disclaimer here, this does not cover all cases.  We're just highlighting examples of tests that you can run._

#### Isolated Component Tests

As mentioned in the intro, __Isolated Tests__ treat a component as a JavaScript object.  This makes the test pretty straightforward because it means you mock any service calls and just focus on the actual JavaScript that composes the object.

For our weather component, an isolated test would look like the following:

```ts
import { TestBed, async, ComponentFixture, fakeAsync, flushMicrotasks, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './services/weather.service';
import { WeatherDisplay } from './models/weatherDisplay';
import { DebugElement } from '@angular/core';
import { MaterialModule } from './material/material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const weatherDisplay: WeatherDisplay = require('../assets/testing/weather-display.json');
  let weatherService: WeatherService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        ForecastComponent
      ],
      providers: [ WeatherService ],
      imports: [
        HttpClientTestingModule, MaterialModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    weatherService = debugElement.injector.get(WeatherService);
  }));

  it('should call the HTML5 geolocation api and return coordinates', fakeAsync(() => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
      const position = { coords: { latitude: 1234.0000, longitude: 5678.0000 } };
      arguments[0](position);
    });
    component.ngOnInit();
    flushMicrotasks();
    expect(component.lat).toEqual('1234.0000');
    expect(component.long).toEqual('5678.0000');
  }));
});
```

As you can see in the example the test fully mocks the `getCurrentPosition` method of the HTML5 geolocation api that is called.  What is actually being tested here is just the component's underlying method call, and not the actual rendering that occurs.  We could do the same for the `savePosition` method, but that was left out for brevity.

#### Shallow component tests

To repeat what was stated earlier, __shallow tests__ focus on one component and ignore any subcomponents that may exist.  If you notice in our template, there is an `app-current-weather` and an `app-forecast` component referenced.  We're going to just write tests on this main `app` component that you see here and not the children.  So an exmaple test here would look like the following:

```ts
import { TestBed, async, ComponentFixture, fakeAsync, flushMicrotasks, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './services/weather.service';
import { WeatherDisplay } from './models/weatherDisplay';
import { DebugElement } from '@angular/core';
import { MaterialModule } from './material/material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const weatherDisplay: WeatherDisplay = require('../assets/testing/weather-display.json');
  let weatherService: WeatherService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        ForecastComponent
      ],
      providers: [ WeatherService ],
      imports: [
        HttpClientTestingModule, MaterialModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  }));

  it('should verify that the component titles are correct', () => {
    expect(debugElement.nativeElement)toHaveText('Weather App');
    expect(debugElement.nativeElement).toHaveText('This is a simple weather app');
    expect(debugElement.nativeElement)toHaveText('Current Weather');
    expect(debugElement.nativeElement).toHaveText('Today\'s Forecast');
  });
});
```

As you can see, this test only tests the heading text that is shown.  If you had more mock data, you could also interrogate that.  The main point is to test the component without any of its subchildren.  Since the `weatherService` affects the children components, we did not test them here.

#### Integrated component tests

The __integrated component tests__ actually test the component rendering from end to end.  This is specifically for a matter of correctness of the output.  We will still mock the service calls, but we will be testing to see how the data is rendered.  The component we are working with is good for this case since it is essentially a Single Page Application (SPA) and only references two subchildren.  So the integrated test should look like the following:

```ts
import { TestBed, async, ComponentFixture, fakeAsync, flushMicrotasks, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './services/weather.service';
import { WeatherDisplay } from './models/weatherDisplay';
import { DebugElement } from '@angular/core';
import { MaterialModule } from './material/material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const weatherDisplay: WeatherDisplay = require('../assets/testing/weather-display.json');
  let weatherService: WeatherService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        ForecastComponent
      ],
      providers: [ WeatherService ],
      imports: [
        HttpClientTestingModule, MaterialModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    weatherService = debugElement.injector.get(WeatherService);
  }));

  it('should populate the weatherDisplay value when WeatherService is called', fakeAsync(() => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
      const position = { coords: { latitude: 37.6584, longitude: -77.6526 } };
      arguments[0](position);
    });
    spyOn(weatherService, 'getWeather').and.returnValue(Promise.resolve(weatherDisplay));
    component.ngOnInit();
    flushMicrotasks();
    expect(component.weatherDisplay).toEqual(weatherDisplay);
  }));
});
```

As you can see from the example, the test that was written is using mock data for both the HTML5 geolocation API call to `getCurrentPosition` as well as the service call's `getWeather` method.  The `weatherDisplay` value is a fully mocked response (read in from a local json file).  The test here tests the rendering of the application to include both the main component and its children (here the `WeatherDisplay` component).
