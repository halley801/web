import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { Router } from '@angular/router';
import { RequestService } from './request.service';

@Injectable()

export class ToaThuocService {
    constructor(
        private request: RequestService,
        private store: Store<AppState>,
        private router: Router
    ) { }

    createToaThuoc(toa: string) {
        this.request.post('/story', { toa })
            .then(response => this.store.dispatch({ type: 'ADD_STORY', story: response.story }))
            .catch(error => alert(error.message));

    }
}