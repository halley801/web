import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { Router } from '@angular/router';
import { RequestService } from './request.service';

@Injectable()

export class UserService {
    constructor(
        private request: RequestService,
        private store: Store<AppState>,
        private router: Router
    ) { }

    signUp(name: string, email: string, password: string) {
        this.request.post('/benhnhan/signup', { name, email, password })
            .then(response => {
                this.store.dispatch({ type: 'CREATE_USER', user: response.user });
                localStorage.setItem('token', response.user.token);
                this.router.navigate(['/']);
                console.log("success")
            })
            .catch(error => alert(error.message));
    }

    signIn(email: string, password: string) {
        this.request.post('/benhnhan/signin', { email, password })
            .then(response => {
                this.store.dispatch({ type: 'SET_USER', user: response.user });
                localStorage.setItem('token', response.user.token);
                this.router.navigate(['/']);
                console.log("success")
            })
            .catch(error => alert(error.message));
    }
    signInDoctor(email: string, password: string) {
        this.request.post('/bacsi/signin', { email, password })
            .then(response => {
                this.store.dispatch({ type: 'SET_USER', user: response.user });
                localStorage.setItem('token', response.user.token);
                this.router.navigate(['/']);
                console.log("success")
            })
            .catch(error => alert(error.message));
    }
    signUpDoctor(name: string, email: string, password: string) {
        this.request.post('/bacsi/signup', { name, email, password })
            .then(response => {
                this.store.dispatch({ type: 'CREATE_USER', user: response.user });
                localStorage.setItem('token', response.user.token);
                this.router.navigate(['/']);
                console.log("success")
            })
            .catch(error => alert(error.message));
    }
    logOut() {
        localStorage.removeItem('token');
        this.store.dispatch({ type: 'LOG_OUT' });
        this.router.navigate(['/signin']);
    }
}