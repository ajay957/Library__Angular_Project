import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  title=""
  auther=""
  Image=""


  bookValues=()=>
  {
    let data:any= {
      "Image":this.Image,"title":this.title,"auther":this.auther
    }
    console.log(data)

}
}
