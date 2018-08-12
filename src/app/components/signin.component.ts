import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-signin',
    template: `
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-dkTxiR4Mv8i0ubTj0fsgTCmhYmOtrc0o6rdrEO6hDZs9cAifak0Y2VVL2cecWHLQ" crossorigin="anonymous">
    <body class="text-center">
    <form [formGroup]="formsignIn" (ngSubmit)="signIn();" class="form-signin" >
      <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Mời đăng nhập</h1>
      <label for="inputEmail" class="sr-only">Email</label>
      <input type="email" id="inputEmail" class="form-control" formControlName="email" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" formControlName="password" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập</button>
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

        `
    ]
})

export class SignInComponent {
    formsignIn = new FormGroup({
        email: new FormControl('nva@gmail.com'),
        password: new FormControl('abc123456'),
    });

    constructor(private userSerivce: UserService) { }

    signIn() {
        const { email, password } = this.formsignIn.value;
        this.userSerivce.signIn(email, password);
    }
}
