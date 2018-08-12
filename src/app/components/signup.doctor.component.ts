import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  template: `
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-dkTxiR4Mv8i0ubTj0fsgTCmhYmOtrc0o6rdrEO6hDZs9cAifak0Y2VVL2cecWHLQ" crossorigin="anonymous">
    <body class="text-center">
    <form [formGroup]="formSignUp" (ngSubmit)="signUp();" class="form-signin" >
      <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Mời đăng ký</h1>
      <div class="form-group">
      <label for="inputName" class="sr-only">Họ Ten</label>
      <input type="text" class="form-control" formControlName="name" placeholder="Họ Tên" required autofocus>
      </div>
      <div class="form-group">
      <label for="inputEmail" class="sr-only">Email</label>
      <input type="email" class="form-control" placeholder="Enter email" formControlName="email">
      </div>
      <i *ngIf="shouldShowEmailError">
            *{{ emailErrorMessage }}
        </i>
      <div class="form-group">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" class="form-control" placeholder="Password" formControlName="password">
      </div>
      <i *ngIf="shouldShowPasswordError">
            *Password khong hop le
        </i>
      <button class="btn btn-lg btn-primary btn-block" type="submit" [disabled]="formSignUp.invalid">Đăng ký</button>
    </form>

  </body>
    `, styles: [
    `
        html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="name"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
i { color: red; display: block; margin-bottom: 10px; }
        input.ng-invalid.ng-touched { border-color: red; }
        `
  ]
})

export class SignUpComponent {
  constructor(private userSerivce: UserService) { }
  formSignUp = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, gmail]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  signUp() {
    
    alert(JSON.stringify(this.formSignUp.value));
    const { name, email, password } = this.formSignUp.value;
        this.userSerivce.signUp(name, email, password)
  }

  get shouldShowEmailError(): boolean {
    const emailControl = this.formSignUp.get('email');
    return emailControl.invalid && emailControl.touched;
  }

  get emailErrorMessage(): string {
    const { errors } = this.formSignUp.get('email');
    if (!errors) return null;
    if (errors.required) return 'Email is required.';
    if (errors.email) return 'Email is invalid.';
    if (errors.gmail) return 'Email must be gmail.';
    return 'Email is invalid.';
  }

  get shouldShowPasswordError(): boolean {
    const passwordControl = this.formSignUp.get('password');
    return passwordControl.invalid && passwordControl.touched;
  }
}

function gmail(control: FormControl): ValidationErrors | null {
  const value: string = control.value;
  if (value.endsWith('@gmail.com')) return null;
  return { gmail: true };
}


