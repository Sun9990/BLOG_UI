import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddBlog: boolean = false;
  private showEditBlog: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddBlog() : void{
    console.log("Add post clicked");
    this.showAddBlog = !this.showAddBlog;
    this.subject.next(this.showAddBlog);
  }

  toggleEditBlog() : void{
    console.log("Edit post clicked");
    this.showEditBlog = !this.showEditBlog;
    this.subject.next(this.showEditBlog);
  }


  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
