import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSignComponent } from './user-sign/user-sign.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { SearchComponent } from './search/search.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';


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
  },
  {
    path:"viewbook",
    component:ViewAllComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserSignComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewAllComponent,
    SearchComponent,
    DeleteBookComponent,
    NavBarComponent,
    NavbarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
