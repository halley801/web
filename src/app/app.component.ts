import { Component } from '@angular/core';
import { AppState, User } from './types';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>

  `,
  styleUrls: ['./app.component.css'],
  // template: `
  //   <app-avatar></app-avatar>
  // `
})

export class AppComponent {
  user: User;
  loaded: boolean;
  constructor(
    private userSerivce: UserService,
    private store: Store<AppState>,
  ) {
    this.store.select('user').subscribe(u => this.user = u);
    this.store.select('loaded').subscribe(l => this.loaded = l);
    // this.userSerivce.check();
  }
}
