import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {
  constructor() { }
  enteredContent=''
  enteredTitle=''

  @Output() postCreated=new EventEmitter<Post>();
//<POST> generic type

  onAddPost(){
 const post:Post={
   title:this.enteredTitle,
   content:this.enteredContent
 };
 this.postCreated.emit(post);
  }

  ngOnInit() { }
}
