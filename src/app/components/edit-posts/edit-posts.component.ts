import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {
  title! : string;
  desc! : string;
  @Output() onEditBlog : EventEmitter<any> = new EventEmitter();
  showEditBlog! : boolean;
  subscription! : Subscription;

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showEditBlog = value)
  }
  ngOnInit(): void {}

  onSubmit(){
    if(!this.title){
      alert("Enter edited title")
    }
    else if(!this.desc){
      alert("Enter edited description")
    }
    else{
    const newBlog = {
      title : this.title,
      desc : this.desc
    }
    console.log("title:",this.title);
    console.log("desc:",this.desc);

    this.onEditBlog.emit(newBlog);

    // clear the form
    this.title = "";
    this.desc = "";
  }
  }
}
