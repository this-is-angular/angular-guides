---
contributors: Santosh Yadav, Eliran Eliassy
---

# Forms and validation in Angular projects

## Suggested topics
- Custom validators
- Custom form controls
- Reactive forms
- Template-driven forms

# Reactive Forms

## Introduction
Forms are a very important part of the application and used to collect user information. Angular Forms supports two-way data binding, so the model and views are always updated with the latest values.

### API Walkthrough

* AbstractControl : AbstractControl is the base class for FormArray FormGroup and FormControl.
* FormArray :  FormArray is really useful when we need an array of FormGroup or FormControl .
* FormGroup : FormGroup is used to compose a form, which can hold multiple FormControl orFormArray .
* FormControl :FormControl represents each control within a FormGroup or FormArray .
* FormBuilder : FormBuilder is service to configure a complex form which may consist FormGroup FormControl or FormArray .
* Validators : Validators class is available for utilizing all the built-in validators which exist in HTML5.

#### Setup
To use Reactive Forms, you need to import ReactiveFormsModule from @angular/forms and make sure it is added to your Angular Module.
Creating a Form
Now as we are aware of the APIs, let's create some forms. We will see several ways where we can have only one control, multiple controls, nested controls,and nested forms.

1. Adding a single Form Control

    There are scenarios where you may need to add a Form Control, and you don't want to create an entire form for that.
    Add a new component using Angular CLI and add below code to see a Form Control created using Reactive Form in action:

    ```ts
    import { Component, OnInit } from '@angular/core';
    import { FormControl } from '@angular/forms';

    @Component({
      selector: 'app-control-demo',
      template: `
      <h1>Form Control Demo<h1>
      <input class="form-control" type="text" [formControl]="searchText" placeholder="Search Text">
      <div>
        Entered Text is:  {{searchText.value}}
      </div>`
    })
    export class ControlDemoComponent implements OnInit {
      searchText: FormControl;
      constructor() { }
      ngOnInit() {
        this.searchText = new FormControl('');
      }
    }
    ```


2. Creating a Form with Controls With FormBuilder

    You can use FormBuilder to create a FormControl it provides syntactical sugar and lets us create FormControl easily.
    Add below code in your component to see it in action.

    ```ts
    import { Component, OnInit } from '@angular/core';
    import { FormBuilder, FormControl } from '@angular/forms';
    @Component({
      selector: 'app-form-control-demo',
      template : `<mat-form-field>
      <input matInput type="text" [formControl]="searchText" placeholder="Search">
      </mat-form-field>
      {{searchText.value}}
      `
    })
    export class FormControlDemoComponent implements OnInit {
      searchText: FormControl;
      constructor(private fb: FormBuilder) { }
      ngOnInit() {
        this.searchText = this.fb.control('');
      }
    }
    ```

    You can also declare a control with the default value and disabled value.

    ```html
    this.fb.control({ value: 'new value', disabled: true });
    ```

3. Creating a FormGroup with FormBuilder

    Creating a Form with multiple controls is very common, you can use the FormBuilder service with FormGroup to create Forms, a simple example is login Form or Registration Form. Let's take an example of Registration form where the user needs to enter the user information and also address information.

    Create a new component and add below `.ts` and `.html` code.

    ```ts
    import { Component, OnInit } from '@angular/core';
    import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
    @Component({
      selector: 'app-form-group-demo',
      templateUrl: './form-group-demo.component.html'
    })
    export class FormGroupDemoComponent implements OnInit {
      registrationForm: FormGroup;
      constructor(private fb: FormBuilder) { }
      ngOnInit() {
        this.registrationForm = this.fb.group({
          userName: new FormControl(''),
          password: new FormControl(''),
          address: this.fb.group({
            // similar to new FormControl('')
            addressLine1: [''],
            addressLine2: [''],
            city: ['']
          })
        });
      }
    }
    ```

    ```html
    <h1>
      Registration Form
    </h1>
    {{registrationForm.value | json}}
    <form [formGroup]="registrationForm">
      <mat-form-field>
        <input matInput type="text" formControlName="userName" placeholder="User Name">
      </mat-form-field>
      <mat-form-field>
        <input matInput type="password" formControlName="password" placeholder="Password">
      </mat-form-field>
      <div formGroupName="address">
        <mat-form-field>
          <input matInput type="text" formControlName="addressLine1" placeholder="Address Line1">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="text" formControlName="addressLine2" placeholder="Address Line2">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="text" formControlName="city" placeholder="City">
        </mat-form-field>
      </div>
      <div>
        <button mat-raised-button color="primary" type="submit">
          Login
        </button>
      </div>
    </form>
    ```

    In the above example, we are using FormBuilder to create a nested form, where address form is part of an existing form, this is the advantage of using FormBuilder service you can easily compose a complex form.
    When we nest a Form, to bind the controls inside a nested form make sure you are adding all controls within `formGroupName="nested_form_name"` or you will get an error.
    The Final Screen looks like below: 

    ![Registration Form](/images/RegistrationForm.png "Registration Form")


4. Creating a FormArray using FormBuilder

    When working with a complex form you may need to add and remove control or nested form dynamically. This is where you can use FormArray to create a form which may have such characteristics. It's really simple to add and removed control or nested form when using FormBuilder Service. Let's create an Employee Onboarding form where a user needs to add previous employers, which can be added/removed dynamically.
    Create a new component and add below code to see it in action:

    ```ts
    import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
    @Component({
      selector: 'app-form-array-demo',
      templateUrl: './form-array-demo.component.html',
      styleUrls: ['./form-array-demo.component.css']
    })
    export class FormArrayDemoComponent implements OnInit {
      onboardingForm  : FormGroup;
      constructor(private fb: FormBuilder) { }

      ngOnInit() {
        this.onboardingForm = this.fb.group({
          name: new FormControl(''),
          dob: new FormControl('', ),
          email: new FormControl(''),
          experience: this.fb.array([
            this.buildForm()
          ])
        });
      }

      buildForm() {
        return this.fb.group({
          organization: new FormControl(''),
          fromDate: new FormControl(''),
          toDate: new FormControl('')
        });
      }

      addControl() {
        const control = this.onboardingForm.get('experience') as FormArray;
        control.push(this.buildForm());
      }

      remove(i: number) {
        const control = this.onboardingForm.get('experience') as FormArray;
        control.removeAt(i);
      }
    }
    ```

    ```html
    {{onboardingForm.value | json}}
    <form [formGroup]="onboardingForm">
      <mat-form-field>
        <input matInput type="text" formControlName="name" placeholder="Name">
      </mat-form-field>
      <mat-form-field>
        <input matInput type="date" formControlName="dob" placeholder="Date of Birth">
      </mat-form-field>
      <mat-form-field>
        <input matInput type="email" formControlName="email" placeholder="Email">
      </mat-form-field>
      <div>
        <button mat-raised-button color="accent"  (click)="addControl()">Add Experience</button>
      </div>
      <div formArrayName="experience">
        <div *ngFor="let exp of onboardingForm.controls['experience'].controls; let i=index">
          <div [formGroupName]="i">
            <mat-form-field>
              <input matInput type="text" formControlName="organization" placeholder="Organization">
            </mat-form-field>
            <mat-form-field>
              <input matInput type="date" formControlName="fromDate" placeholder="From Date">
            </mat-form-field>
            <mat-form-field>
              <input matInput type="date" formControlName="toDate" placeholder="To Date">
            </mat-form-field>
            <div>
              <button mat-raised-button color="warn" (click)="remove(i)">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button [disabled]="onboardingForm.invalid" type="submit" mat-raised-button color="primary">Save</button>
      </div>
    </form>
    ```


    Here we are nesting a FormArray with FormGroup, you can also nest a FormGroup and FormArray within a single form.
    Unlike the formGroupName, in this case, we are using formArrayName to bind the controls. Also, the below ngFor is really important here we are running for loop and creating the controls for each formGroup inside the array.

    ```html
    <div *ngFor="let exp of onboardingForm.controls['experience'].controls; let i=index">
    ```
    The below syntax is to generate a unique `formGroupName` for each formGroup in the array.

    ```html
    <div [formGroupName]="i">
    ```
    To add a formGroup dynamically we have a button placed before our formArray. The below code is responsible for adding the controls every time we press "Add Experience" button.

    ```ts
    addControl() {
     const control = this.onboardingForm.get('experience') as FormArray;
     control.push(this.buildForm());
     }
    ```
    The final output will look like below:

    ![Form Array](/images/FormArray.png "Form Array")


#### Validations

  Adding validation in reactive form is really simple, first, we will see how to add built-in validations and then how to add custom validations.
  Built-in validations
  `Validators` Class is available in `@angular/forms` to use the built-in validators.
  The following validators are available:

  1. Validators.min
  2. Validators.max
  3. Validators.required
  4. Validators.requiredTrue
  5. Validators.email
  6. Validators.minLength
  7. Validators.maxLength
  8. Validators.pattern

  you can use below syntax to add Validation to any `FormControl`:

  ```ts
  name: new FormControl('', Validators.required)
  ```
  if you want to apply multiple validations to single control use below syntax:

  ```ts
  name: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)])
  ```

#### Custom Validation
  To add a custom validation follow the below steps:

  1. Add a class named customvalidator.ts
  2. Copy below code to your class

  ```ts
  import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
  export class CustomValidator {
    static checkName(control: AbstractControl): ValidationErrors | null {
      const userName = control.value as string;
      if (userName.includes('test')) {
        return { invalidName: true }
      }
      return null;
    }

    static checkInvlidChars(invalidChars: string) {
      return (control: AbstractControl): ValidationErrors | null => {
        const userName = control.value as string;
        if (userName.includes(invalidChars)) {
          return { invalidChars: true }
        }
        return null;
      }
    }
  }
  ```

  Now apply the custom validation to your control like below:

  ```ts
  userName: new FormControl('', CustomValidator.checkName)
  password: new FormControl('', CustomValidator.checkInvlidChars('@'))
  ```

  The first validation checks if the userName field contains 'test' which is not allowed and second validation takes one parameter which is the character which should not be allowed.

#### Async Validator
  You can also add an async validator, a simple example of an async validator is let's say you have written a registration form and when the user enters the username we want to validate if already a user with the same name exists.
  Let's create a validator with the same example where we will validate if the username already exists.

  1. As we don' have an API we can write a mock service to return few email id's and then we will check from the same response if the email which was entered by the user already exists.
  2. create a service and add below code I have named it as RegistrationService

  ```ts
  import { Injectable } from '@angular/core';
  import { of, Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class RegistrationService {
    email: string[] = [
      'user1@gmail.com',
      'user2@gmail.om'
    ];
    constructor() { }
    getEmails(): Observable<string[]> {
      return of(this.email);
    }
  }
  ```

  Next, write the validator add it in the same custom validator class which you have written earlier.

  ```ts
  static checkEmail(service: RegistrationService) {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const userEmail = control.value as string;
      return service.getEmails().pipe(
        map((email) => email.indexOf(userEmail) !== 0 ? null: { duplicateEmail: true })
      );
    }
  }
  ```

  Next, we need to use this in our Form, add the below code in your existing formGroup demo component we created earlier:

  ```ts
  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
  import { CustomValidator } from '../customvalidator';
  import { RegistrationService } from '../registration.service';
  @Component({
    selector: 'app-form-group-demo',
    templateUrl: './form-group-demo.component.html'
  })
  export class FormGroupDemoComponent implements OnInit {
    registrationForm: FormGroup;
    constructor(private fb: FormBuilder,
      private service: RegistrationService) { }
    ngOnInit() {
      this.registrationForm = this.fb.group({
        userName: new FormControl('', [CustomValidator.checkName], CustomValidator.checkEmail(this.service)),
        password: new FormControl('', CustomValidator.checkInvlidChars('@')),
        address: this.fb.group({
          // similar to new FormControl('')
          addressLine1: [''],
          addressLine2: [''],
          city: ['']
        })
      });
    }
  }
  ```

  In the above example, we are passing async validator which we have created as the 3rd parameter if you pass it in validator which is 2nd parameter it will just get the subscription object for us.


#### Form Level Validation
  The custom validations which we have applied so far is at control level, you can also add custom validation at the form level. A good use case is a password and confirm password functionality.
  In the above use case, the validations can not be applied at control level as we need to get the values of both controls and match the values.
  Let's write the form level validation for the above use case, add a new control in called confirmPassword in existing formGroup demo component.

  1. Add the below code into existing custom validator which is created.

  ```ts
    static validatePassword(form: FormGroup): ValidationErrors | null {
    const password = form.get('password').value as string;
    const confirmPassword = form.get('confirmPassword').value as string;

    if (password.toLowerCase() === confirmPassword.toLowerCase()) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
  ```

  2. Next, add the validation into you form the updated form looks like below.

  ```ts
   this.registrationForm = this.fb.group({
      userName: new FormControl('', [CustomValidator.checkName], CustomValidator.checkEmail(this.service)),
      password: new FormControl('', CustomValidator.checkInvlidChars('@')),
      confirmPassword: new FormControl('', Validators.required),
      address: this.fb.group({
        // similar to new FormControl('')
        addressLine1: [''],
        addressLine2: [''],
        city: ['']
      })
    }, { validators: [CustomValidator.validatePassword] });
    ```

  3. We need to update the HTML as well to show the error and recently added confirm password control, add below code to your template.

  ```html
  <h1>
  Registration Form
  </h1>
  <div *ngIf="registrationForm?.errors?.invalidPassword">
    Password and confirm password do not match!
  </div>
  <form [formGroup]="registrationForm">
    <mat-form-field>
      {{registrationForm.get('userName').errors | json}}
      <input matInput type="text" formControlName="userName" placeholder="User Name">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="password" formControlName="password" placeholder="Password">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="password" formControlName="confirmPassword" placeholder="Confirm Password">
    </mat-form-field>
    <div formGroupName="address">
      <mat-form-field>
        <input matInput type="text" formControlName="addressLine1" placeholder="Address Line1">
      </mat-form-field>
      <mat-form-field>
        <input matInput type="text" formControlName="addressLine2" placeholder="Address Line2">
      </mat-form-field>
      <mat-form-field>
        <input matInput type="text" formControlName="city" placeholder="City">
      </mat-form-field>
    </div>
    <div>
      <button mat-raised-button color="primary" type="submit">
        Login
      </button>
    </div>
  </form>
  ```

  Currently, the error is attached to form object you can also add the error on control level you can replace the earlier password validator with below code.

  ```ts
  static validatePassword(form: FormGroup): ValidationErrors | null {
    const password = form.get('password').value as string;
    const confirmPassword = form.get('confirmPassword').value as string;

    let confirmPasswordControl = form.get('confirmPassword') as FormControl;
    if (password.toLowerCase() === confirmPassword.toLowerCase()) {
      confirmPasswordControl.setErrors(null);
      return null;
    } else {
      confirmPasswordControl.setErrors({ passwordInvali: true });
      return { invalidPassword: true };
    }
  }
  ```

  You can notice we are using setErrors method to add and remove errors. We will discuss setErrors in detail. You can also create async validator you can update your code like below:

  ```ts
  { validators: [CustomValidator.validatePassword] , asyncValidators : [] }
  ```
