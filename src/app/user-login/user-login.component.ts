import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  name=""
  password=""



  loginValues=()=>
  {
    let data:any={"name":this.name,"password":this.password}

    console.log(data)
  }

}
