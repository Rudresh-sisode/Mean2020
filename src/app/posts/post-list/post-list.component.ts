import { Component,Input } from "@angular/core";
import { Post } from '../post.model';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent{
  /*posts=[
    {
      title:'First',content:'this is the first post content'
    },
    {
      title:'First',content:'this is the first post content'
    },
    {
      title:'First',content:'this is the first post content'
    }
  ]*/

  @Input() posts:Post[]=[];

}
