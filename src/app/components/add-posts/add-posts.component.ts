import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit{
  title! : string;
  desc! : string;
  @Output() onAddBlog : EventEmitter<any> = new EventEmitter()
  showAddBlog! : boolean;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddBlog = value));
  }

  ngOnInit(): void {}
    
  onSubmit(){
    if(!this.title){
      alert("Enter title");
      return;
    }
    else if(!this.desc){
      alert("Enter description");
      return;
    }
    else{
    const newBlog = {
      title : this.title,
      desc : this.desc
    }

    this.onAddBlog.emit(newBlog);

    // to clear the form after submission

    this.title = " ";
    this.desc = " ";
  }
}
}
