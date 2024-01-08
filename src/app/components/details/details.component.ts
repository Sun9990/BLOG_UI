import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Blog } from 'src/app/Blog';
import { BlogService } from 'src/app/service/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  blogId! : any;
  @Input() blog : any;
  @Input() setDesc! : boolean;
  showEditBlog! : boolean ;
  subscription! : Subscription;
  @Output() onDeletePostEvent : EventEmitter<any> = new EventEmitter()
  @Output() onEditPostEvent : EventEmitter<any> = new EventEmitter()


  constructor(private activatedRoute:  ActivatedRoute, private blogService : BlogService, private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showEditBlog = value)
  }

  ngOnInit(): void {}
onDeletePost(blog : any){
  console.log("post:",blog)
  this.onDeletePostEvent.emit(blog)
}

toggleEditBlog(){
  console.log("Edit button toggle");
  this.uiService.toggleEditBlog();
}
}
