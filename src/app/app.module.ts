import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/nav-bar.component';
import { SignInComponent } from './components/signin.component';

import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
import { ChatService } from './services/chat.service'

import { loadedReducer, userReducer } from './reducers';
import { SignUpComponent } from './components/signup.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { SignInDoctorComponent } from './components/signin.doctor.component';
import { ChatComponent } from './components/chat.component';
import { ToaThuocComponent } from './components/toathuoc.component';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'doctor', component: SignInDoctorComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'toathuoc', component: ToaThuocComponent },
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    PageNotFoundComponent,
    SignInDoctorComponent,
    ChatComponent,
    ToaThuocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig),
    StoreModule.forRoot({
      loaded: loadedReducer,
      user: userReducer
    })
  ],
  providers: [
    UserService, 
    RequestService, 
    ChatService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
