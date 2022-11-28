import { Component } from '@angular/core';

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.css']
})
export class UserSignComponent {
  name=""
  adhar=""
  address=""
  pincode=""


  signValues=()=>
  {
    let data:any={"name":this.name,"adhar":this.adhar,"address":this.address,"pincode":this.pincode}
    console.log(data)
  }

}
