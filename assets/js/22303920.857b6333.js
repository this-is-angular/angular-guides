"use strict";(self.webpackChunkthis_is_angular_guides=self.webpackChunkthis_is_angular_guides||[]).push([[2597],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return c}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),m=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=m(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(t),c=n,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||a;return t?o.createElement(f,i(i({ref:r},d),{},{components:t})):o.createElement(f,i({ref:r},d))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4275:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],l={contributors:"Santosh Yadav, Eliran Eliassy"},s="Forms and validation in Angular projects",m={unversionedId:"fundamentals/forms-and-validation-in-angular-projects",id:"fundamentals/forms-and-validation-in-angular-projects",title:"Forms and validation in Angular projects",description:"Suggested topics",source:"@site/docs/fundamentals/forms-and-validation-in-angular-projects.md",sourceDirName:"fundamentals",slug:"/fundamentals/forms-and-validation-in-angular-projects",permalink:"/angular-guides/docs/fundamentals/forms-and-validation-in-angular-projects",draft:!1,editUrl:"https://github.com/this-is-angular/angular-guides/edit/main/docs/fundamentals/forms-and-validation-in-angular-projects.md",tags:[],version:"current",frontMatter:{contributors:"Santosh Yadav, Eliran Eliassy"},sidebar:"guidesSidebar",previous:{title:"Component features",permalink:"/angular-guides/docs/fundamentals/component-features"},next:{title:"How change detection works in Angular projects",permalink:"/angular-guides/docs/fundamentals/how-change-detection-works-in-angular-projects"}},d={},u=[{value:"Suggested topics",id:"suggested-topics",level:2},{value:"Introduction",id:"introduction",level:2},{value:"API Walkthrough",id:"api-walkthrough",level:3},{value:"Setup",id:"setup",level:4},{value:"Validations",id:"validations",level:4},{value:"Custom Validation",id:"custom-validation",level:4},{value:"Async Validator",id:"async-validator",level:4},{value:"Form Level Validation",id:"form-level-validation",level:4}],p={toc:u};function c(e){var r=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forms-and-validation-in-angular-projects"},"Forms and validation in Angular projects"),(0,a.kt)("h2",{id:"suggested-topics"},"Suggested topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom validators"),(0,a.kt)("li",{parentName:"ul"},"Custom form controls"),(0,a.kt)("li",{parentName:"ul"},"Reactive forms"),(0,a.kt)("li",{parentName:"ul"},"Template-driven forms")),(0,a.kt)("h1",{id:"reactive-forms"},"Reactive Forms"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Forms are a very important part of the application and used to collect user information. Angular Forms supports two-way data binding, so the model and views are always updated with the latest values."),(0,a.kt)("h3",{id:"api-walkthrough"},"API Walkthrough"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AbstractControl\xa0: AbstractControl is the base class for FormArray FormGroup and FormControl."),(0,a.kt)("li",{parentName:"ul"},"FormArray\xa0: FormArray is really useful when we need an array of FormGroup or FormControl\xa0."),(0,a.kt)("li",{parentName:"ul"},"FormGroup\xa0: FormGroup is used to compose a form, which can hold multiple FormControl orFormArray\xa0."),(0,a.kt)("li",{parentName:"ul"},"FormControl\xa0:FormControl represents each control within a FormGroup or FormArray\xa0."),(0,a.kt)("li",{parentName:"ul"},"FormBuilder\xa0: FormBuilder is service to configure a complex form which may consist FormGroup FormControl or FormArray\xa0."),(0,a.kt)("li",{parentName:"ul"},"Validators\xa0: Validators class is available for utilizing all the built-in validators which exist in HTML5.")),(0,a.kt)("h4",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To use Reactive Forms, you need to import ReactiveFormsModule from @angular/forms and make sure it is added to your Angular Module.\nCreating a Form\nNow as we are aware of the APIs, let's create some forms. We will see several ways where we can have only one control, multiple controls, nested controls,and nested forms."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Adding a single Form Control"),(0,a.kt)("p",{parentName:"li"},"There are scenarios where you may need to add a Form Control, and you don't want to create an entire form for that.\nAdd a new component using Angular CLI and add below code to see a Form Control created using Reactive Form in action:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, OnInit } from "@angular/core";\nimport { FormControl } from "@angular/forms";\n\n@Component({\n  selector: "app-control-demo",\n  template: ` <h1>\n    Form Control Demo\n    <h1>\n      <input class="form-control" type="text" [formControl]="searchText" placeholder="Search Text" />\n      <div>Entered Text is: {{ searchText.value }}</div>\n    </h1>\n  </h1>`,\n})\nexport class ControlDemoComponent implements OnInit {\n  searchText: FormControl;\n  constructor() {}\n  ngOnInit() {\n    this.searchText = new FormControl("");\n  }\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Creating a Form with Controls With FormBuilder"),(0,a.kt)("p",{parentName:"li"},"You can use FormBuilder to create a FormControl it provides syntactical sugar and lets us create FormControl easily.\nAdd below code in your component to see it in action."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, OnInit } from "@angular/core";\nimport { FormBuilder, FormControl } from "@angular/forms";\n@Component({\n  selector: "app-form-control-demo",\n  template: `<mat-form-field>\n      <input matInput type="text" [formControl]="searchText" placeholder="Search" />\n    </mat-form-field>\n    {{ searchText.value }} `,\n})\nexport class FormControlDemoComponent implements OnInit {\n  searchText: FormControl;\n  constructor(private fb: FormBuilder) {}\n  ngOnInit() {\n    this.searchText = this.fb.control("");\n  }\n}\n')),(0,a.kt)("p",{parentName:"li"},"You can also declare a control with the default value and disabled value."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},"this.fb.control({ value: 'new value', disabled: true });\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Creating a FormGroup with FormBuilder"),(0,a.kt)("p",{parentName:"li"},"Creating a Form with multiple controls is very common, you can use the FormBuilder service with FormGroup to create Forms, a simple example is login Form or Registration Form. Let's take an example of Registration form where the user needs to enter the user information and also address information."),(0,a.kt)("p",{parentName:"li"},"Create a new component and add below\xa0",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},".html")," code."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, OnInit } from "@angular/core";\nimport { FormControl, FormGroup, FormBuilder } from "@angular/forms";\n@Component({\n  selector: "app-form-group-demo",\n  templateUrl: "./form-group-demo.component.html",\n})\nexport class FormGroupDemoComponent implements OnInit {\n  registrationForm: FormGroup;\n  constructor(private fb: FormBuilder) {}\n  ngOnInit() {\n    this.registrationForm = this.fb.group({\n      userName: new FormControl(""),\n      password: new FormControl(""),\n      address: this.fb.group({\n        // similar to new FormControl(\'\')\n        addressLine1: [""],\n        addressLine2: [""],\n        city: [""],\n      }),\n    });\n  }\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Registration Form</h1>\n{{registrationForm.value | json}}\n<form [formGroup]="registrationForm">\n  <mat-form-field>\n    <input matInput type="text" formControlName="userName" placeholder="User Name" />\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type="password" formControlName="password" placeholder="Password" />\n  </mat-form-field>\n  <div formGroupName="address">\n    <mat-form-field>\n      <input matInput type="text" formControlName="addressLine1" placeholder="Address Line1" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type="text" formControlName="addressLine2" placeholder="Address Line2" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type="text" formControlName="city" placeholder="City" />\n    </mat-form-field>\n  </div>\n  <div>\n    <button mat-raised-button color="primary" type="submit">Login</button>\n  </div>\n</form>\n')),(0,a.kt)("p",{parentName:"li"},"In the above example, we are using FormBuilder to create a nested form, where address form is part of an existing form, this is the advantage of using FormBuilder service you can easily compose a complex form.\nWhen we nest a Form, to bind the controls inside a nested form make sure you are adding all controls within ",(0,a.kt)("inlineCode",{parentName:"p"},'formGroupName="nested_form_name"')," or you will get an error.\nThe Final Screen looks like below:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Registration Form",src:t(4004).Z,title:"Registration Form",width:"529",height:"497"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Creating a FormArray using FormBuilder"),(0,a.kt)("p",{parentName:"li"},"When working with a complex form you may need to add and remove control or nested form dynamically. This is where you can use FormArray to create a form which may have such characteristics. It's really simple to add and removed control or nested form when using FormBuilder Service. Let's create an Employee Onboarding form where a user needs to add previous employers, which can be added/removed dynamically.\nCreate a new component and add below code to see it in action:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, OnInit } from "@angular/core";\nimport { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";\n@Component({\n  selector: "app-form-array-demo",\n  templateUrl: "./form-array-demo.component.html",\n  styleUrls: ["./form-array-demo.component.css"],\n})\nexport class FormArrayDemoComponent implements OnInit {\n  onboardingForm: FormGroup;\n  constructor(private fb: FormBuilder) {}\n\n  ngOnInit() {\n    this.onboardingForm = this.fb.group({\n      name: new FormControl(""),\n      dob: new FormControl(""),\n      email: new FormControl(""),\n      experience: this.fb.array([this.buildForm()]),\n    });\n  }\n\n  buildForm() {\n    return this.fb.group({\n      organization: new FormControl(""),\n      fromDate: new FormControl(""),\n      toDate: new FormControl(""),\n    });\n  }\n\n  addControl() {\n    const control = this.onboardingForm.get("experience") as FormArray;\n    control.push(this.buildForm());\n  }\n\n  remove(i: number) {\n    const control = this.onboardingForm.get("experience") as FormArray;\n    control.removeAt(i);\n  }\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'{{onboardingForm.value | json}}\n<form [formGroup]="onboardingForm">\n  <mat-form-field>\n    <input matInput type="text" formControlName="name" placeholder="Name" />\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type="date" formControlName="dob" placeholder="Date of Birth" />\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type="email" formControlName="email" placeholder="Email" />\n  </mat-form-field>\n  <div>\n    <button mat-raised-button color="accent" (click)="addControl()">Add Experience</button>\n  </div>\n  <div formArrayName="experience">\n    <div *ngFor="let exp of onboardingForm.controls[\'experience\'].controls; let i=index">\n      <div [formGroupName]="i">\n        <mat-form-field>\n          <input matInput type="text" formControlName="organization" placeholder="Organization" />\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type="date" formControlName="fromDate" placeholder="From Date" />\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type="date" formControlName="toDate" placeholder="To Date" />\n        </mat-form-field>\n        <div>\n          <button mat-raised-button color="warn" (click)="remove(i)">Remove</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <button [disabled]="onboardingForm.invalid" type="submit" mat-raised-button color="primary">Save</button>\n  </div>\n</form>\n')),(0,a.kt)("p",{parentName:"li"},"Here we are nesting a FormArray with FormGroup, you can also nest a FormGroup and FormArray within a single form.\nUnlike the formGroupName, in this case, we are using formArrayName to bind the controls. Also, the below ngFor is really important here we are running for loop and creating the controls for each formGroup inside the array."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div *ngFor=\"let exp of onboardingForm.controls['experience'].controls; let i=index\"></div>\n")),(0,a.kt)("p",{parentName:"li"},"The below syntax is to generate a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"formGroupName")," for each formGroup in the array."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div [formGroupName]="i"></div>\n')),(0,a.kt)("p",{parentName:"li"},'To add a formGroup dynamically we have a button placed before our formArray. The below code is responsible for adding the controls every time we press "Add Experience" button.'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"addControl() {\n\xa0const control = this.onboardingForm.get('experience') as FormArray;\n\xa0control.push(this.buildForm());\n\xa0}\n")),(0,a.kt)("p",{parentName:"li"},"The final output will look like below:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Form Array",src:t(3159).Z,title:"Form Array",width:"554",height:"594"})))),(0,a.kt)("h4",{id:"validations"},"Validations"),(0,a.kt)("p",null,"Adding validation in reactive form is really simple, first, we will see how to add built-in validations and then how to add custom validations.\nBuilt-in validations\n",(0,a.kt)("inlineCode",{parentName:"p"},"Validators")," Class is available in ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular/forms")," to use the built-in validators.\nThe following validators are available:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Validators.min"),(0,a.kt)("li",{parentName:"ol"},"Validators.max"),(0,a.kt)("li",{parentName:"ol"},"Validators.required"),(0,a.kt)("li",{parentName:"ol"},"Validators.requiredTrue"),(0,a.kt)("li",{parentName:"ol"},"Validators.email"),(0,a.kt)("li",{parentName:"ol"},"Validators.minLength"),(0,a.kt)("li",{parentName:"ol"},"Validators.maxLength"),(0,a.kt)("li",{parentName:"ol"},"Validators.pattern")),(0,a.kt)("p",null,"you can use below syntax to add Validation to any ",(0,a.kt)("inlineCode",{parentName:"p"},"FormControl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'name: new FormControl("", Validators.required);\n')),(0,a.kt)("p",null,"if you want to apply multiple validations to single control use below syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'name: new FormControl("", [Validators.required, Validators.email, Validators.minLength(6)]);\n')),(0,a.kt)("h4",{id:"custom-validation"},"Custom Validation"),(0,a.kt)("p",null,"To add a custom validation follow the below steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a class named customvalidator.ts"),(0,a.kt)("li",{parentName:"ol"},"Copy below code to your class")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";\nexport class CustomValidator {\n  static checkName(control: AbstractControl): ValidationErrors | null {\n    const userName = control.value as string;\n    if (userName.includes("test")) {\n      return { invalidName: true };\n    }\n    return null;\n  }\n\n  static checkInvlidChars(invalidChars: string) {\n    return (control: AbstractControl): ValidationErrors | null => {\n      const userName = control.value as string;\n      if (userName.includes(invalidChars)) {\n        return { invalidChars: true };\n      }\n      return null;\n    };\n  }\n}\n')),(0,a.kt)("p",null,"Now apply the custom validation to your control like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'userName: new FormControl("", CustomValidator.checkName);\npassword: new FormControl("", CustomValidator.checkInvlidChars("@"));\n')),(0,a.kt)("p",null,"The first validation checks if the userName field contains 'test' which is not allowed and second validation takes one parameter which is the character which should not be allowed."),(0,a.kt)("h4",{id:"async-validator"},"Async Validator"),(0,a.kt)("p",null,"You can also add an async validator, a simple example of an async validator is let's say you have written a registration form and when the user enters the username we want to validate if already a user with the same name exists.\nLet's create a validator with the same example where we will validate if the username already exists."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"As we don' have an API we can write a mock service to return few email id's and then we will check from the same response if the email which was entered by the user already exists."),(0,a.kt)("li",{parentName:"ol"},"create a service and add below code I have named it as RegistrationService")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable } from "@angular/core";\nimport { of, Observable } from "rxjs";\n\n@Injectable({\n  providedIn: "root",\n})\nexport class RegistrationService {\n  email: string[] = ["user1@gmail.com", "user2@gmail.om"];\n  constructor() {}\n  getEmails(): Observable<string[]> {\n    return of(this.email);\n  }\n}\n')),(0,a.kt)("p",null,"Next, write the validator add it in the same custom validator class which you have written earlier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"static checkEmail(service: RegistrationService) {\n  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {\n    const userEmail = control.value as string;\n    return service.getEmails().pipe(\n      map((email) => email.indexOf(userEmail) !== 0 ? null: { duplicateEmail: true })\n    );\n  }\n}\n")),(0,a.kt)("p",null,"Next, we need to use this in our Form, add the below code in your existing formGroup demo component we created earlier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, OnInit } from "@angular/core";\nimport { FormControl, FormGroup, FormBuilder } from "@angular/forms";\nimport { CustomValidator } from "../customvalidator";\nimport { RegistrationService } from "../registration.service";\n@Component({\n  selector: "app-form-group-demo",\n  templateUrl: "./form-group-demo.component.html",\n})\nexport class FormGroupDemoComponent implements OnInit {\n  registrationForm: FormGroup;\n  constructor(private fb: FormBuilder, private service: RegistrationService) {}\n  ngOnInit() {\n    this.registrationForm = this.fb.group({\n      userName: new FormControl("", [CustomValidator.checkName], CustomValidator.checkEmail(this.service)),\n      password: new FormControl("", CustomValidator.checkInvlidChars("@")),\n      address: this.fb.group({\n        // similar to new FormControl(\'\')\n        addressLine1: [""],\n        addressLine2: [""],\n        city: [""],\n      }),\n    });\n  }\n}\n')),(0,a.kt)("p",null,"In the above example, we are passing async validator which we have created as the 3rd parameter if you pass it in validator which is 2nd parameter it will just get the subscription object for us."),(0,a.kt)("h4",{id:"form-level-validation"},"Form Level Validation"),(0,a.kt)("p",null,"The custom validations which we have applied so far is at control level, you can also add custom validation at the form level. A good use case is a password and confirm password functionality.\nIn the above use case, the validations can not be applied at control level as we need to get the values of both controls and match the values.\nLet's write the form level validation for the above use case, add a new control in called confirmPassword in existing formGroup demo component."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the below code into existing custom validator which is created.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  static validatePassword(form: FormGroup): ValidationErrors | null {\n  const password = form.get('password').value as string;\n  const confirmPassword = form.get('confirmPassword').value as string;\n\n  if (password.toLowerCase() === confirmPassword.toLowerCase()) {\n    return null;\n  } else {\n    return { invalidPassword: true };\n  }\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Next, add the validation into you form the updated form looks like below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"}," this.registrationForm = this.fb.group({\n    userName: new FormControl('', [CustomValidator.checkName], CustomValidator.checkEmail(this.service)),\n    password: new FormControl('', CustomValidator.checkInvlidChars('@')),\n    confirmPassword: new FormControl('', Validators.required),\n    address: this.fb.group({\n      // similar to new FormControl('')\n      addressLine1: [''],\n      addressLine2: [''],\n      city: ['']\n    })\n  }, { validators: [CustomValidator.validatePassword]\n  );\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"We need to update the HTML as well to show the error and recently added confirm password control, add below code to your template.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Registration Form</h1>\n<div *ngIf="registrationForm?.errors?.invalidPassword">Password and confirm password do not match!</div>\n<form [formGroup]="registrationForm">\n  <mat-form-field>\n    {{registrationForm.get(\'userName\').errors | json}}\n    <input matInput type="text" formControlName="userName" placeholder="User Name" />\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type="password" formControlName="password" placeholder="Password" />\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type="password" formControlName="confirmPassword" placeholder="Confirm Password" />\n  </mat-form-field>\n  <div formGroupName="address">\n    <mat-form-field>\n      <input matInput type="text" formControlName="addressLine1" placeholder="Address Line1" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type="text" formControlName="addressLine2" placeholder="Address Line2" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type="text" formControlName="city" placeholder="City" />\n    </mat-form-field>\n  </div>\n  <div>\n    <button mat-raised-button color="primary" type="submit">Login</button>\n  </div>\n</form>\n')),(0,a.kt)("p",null,"Currently, the error is attached to the form object you can also add the error on control level you can replace the earlier password validator with below code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"static validatePassword(form: FormGroup): ValidationErrors | null {\n  const password = form.get('password').value as string;\n  const confirmPassword = form.get('confirmPassword').value as string;\n\n  let confirmPasswordControl = form.get('confirmPassword') as FormControl;\n  if (password.toLowerCase() === confirmPassword.toLowerCase()) {\n    confirmPasswordControl.setErrors(null);\n    return null;\n  } else {\n    confirmPasswordControl.setErrors({ passwordInvali: true });\n    return { invalidPassword: true };\n  }\n}\n")),(0,a.kt)("p",null,"You can notice we are using setErrors method to add and remove errors. We will discuss setErrors in detail. You can also create async validator you can update your code like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{ validators: [CustomValidator.validatePassword]\xa0, asyncValidators\xa0: [] }\n")))}c.isMDXComponent=!0},3159:function(e,r,t){r.Z=t.p+"assets/images/FormArray-d2f81725ad7bea478562772040ca0e25.png"},4004:function(e,r,t){r.Z=t.p+"assets/images/RegistrationForm-70901ff78120fabfb2142174b1a33ec0.png"}}]);