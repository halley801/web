import { Component } from '@angular/core';
import { AppState, User } from '../types';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-home',
    template: `
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-dkTxiR4Mv8i0ubTj0fsgTCmhYmOtrc0o6rdrEO6hDZs9cAifak0Y2VVL2cecWHLQ" crossorigin="anonymous">
        <h4>Home component</h4>
            WEBSITE TƯ VẤN XIN ĐƯỢC PHỤC VỤ

    `
})

export class HomeComponent {
    user: User;
    constructor(
        private store: Store<AppState>,
    ) {
        this.store.select('user').subscribe(u => this.user = u);
    }
}
