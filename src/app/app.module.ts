import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Routes } from '@angular/router';
import { UserSignComponent } from './user-sign/user-sign.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"usersign",
    component:UserSignComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserSignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
