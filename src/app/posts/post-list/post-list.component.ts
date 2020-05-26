import { Component } from "@angular/core";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent{
  posts=[
    {
      title:'First',content:'this is the first post content'
    },
    {
      title:'First',content:'this is the first post content'
    },
    {
      title:'First',content:'this is the first post content'
    }
  ]
}
