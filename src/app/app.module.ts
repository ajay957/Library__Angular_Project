import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSignComponent } from './user-sign/user-sign.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"usersign",
    component:UserSignComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"bookentry",
    component:BookEntryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserSignComponent,
    UserLoginComponent,
    BookEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
