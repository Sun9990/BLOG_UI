import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Blog } from 'src/app/Blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent implements OnInit{
@Input() blog! : Blog;
@Output() onDeleteBlog : EventEmitter<Blog> = new EventEmitter()

  constructor(){}

  ngOnInit(): void{
    
  }

  onDelete(blog : any){
    console.log(blog);
    this.onDeleteBlog.emit(blog);
  }
}
