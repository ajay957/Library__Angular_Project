import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  books:any=[
    {
      "Image":"https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg",
      "title":"Lord Of Rings",
      "auther":"Auther:Talkin"
    },
    {
      "Image":"https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg",
      "title":"Lord Of Rings",
      "auther":"Auther:Talkin"
    },
    {
      "Image":"https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg",
      "title":"Lord Of Rings",
      "auther":"Auther:Talkin"
    }
  ]

}
