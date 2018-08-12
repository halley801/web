import { Component } from '@angular/core';
import { AppState, User } from '../types';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-navbar',
    template: `
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-dkTxiR4Mv8i0ubTj0fsgTCmhYmOtrc0o6rdrEO6hDZs9cAifak0Y2VVL2cecWHLQ" crossorigin="anonymous">
    <body class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Tư vấn online</a>
          </div>
          <ul class="nav navbar-nav" *ngIf="user">
              <li>
                  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                      Trang chủ
                  </a>
              </li>
            <li><a routerLink="/profile" routerLinkActive="active">Hồ sơ của bạn</a></li>
            <li><a routerLink="/chat" routerLinkActive="active">Khám với bác sĩ</a></li>
            <li><a routerLink="/toathuoc" routerLinkActive="active">Khám với bác sĩ</a></li>
            <li><a (click)="logOut();" style="cursor: pointer;">Log out</a></li>
          </ul>
          <ul class="nav navbar-nav" *ngIf="!user">
              <li>
                  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                      Trang chủ
                  </a>
              </li>
            <li><a routerLink="/signin" routerLinkActive="active">Đăng nhập</a></li>
            <li><a routerLink="/signup" routerLinkActive="active">Đăng kí</a></li>
          </ul>
        </div>
      </nav>
      </body>
    `
})

export class NavbarComponent {
    user: User;
    constructor(private userSerivce: UserService, private store: Store<AppState>) {
      this.store.select('user').subscribe(u => this.user = u);
    }
    logOut() { this.userSerivce.logOut(); }
}
