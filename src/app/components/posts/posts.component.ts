import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Blog';
import { BlogService } from 'src/app/service/blog.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  blogs: any = [];
  index! :any;
  constructor( private blogService: BlogService){}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs: any) => {
      console.log(blogs);
      this.blogs = blogs})
  }

  deleteBlog(blog : any){
    // console.log("BLOGS :", this.blogs);
    console.log("BLOG :", blog);
    console.log("ID : ", blog._id["$oid"]);
    var blog_id : string = blog._id["$oid"];
    this.blogService
    .deleteBlog(blog_id)
    .subscribe(
      // () => (this.blogs = this.blogs.filter(b => b._id !== blog._id ))
      {
        next : (res) =>{
          console.log("res",res);
          console.log("blogs",this.blogs);
          this.blogs = this.blogs.filter((post: any) => {
            console.log("post._id['$oid]", post._id['$oid'])
            post._id['$oid'] !== blog_id});
            // fetching the data after deletion
            this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
              console.log("Fetching blogs after deletion",blogs);
              this.blogs = blogs})
        },
        error : (e) => console.error(e),
        complete : ()=>{
          console.log("Complete");
        }
      } 
    )
    
  }

//   addBlog(blog : any){
//     console.log("Within addBlog: ",blog);
//     this.blogService.addBlog(blog).subscribe((blog) => {
//       console.log("Newly added blog",blog);
//       this.blogs.push(blog.data[0])})

//       // fetching the data after adding
//     this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
//       console.log(blogs);
//       this.blogs = blogs})
//   }

addBlog(blog: any) {
  console.log("Within addBlog: ", blog);

  this.blogService.addBlog(blog).subscribe(
    (response) => {
      const addedBlog = response.data && response.data.length > 0 ? response.data[0] : null;
      if (addedBlog) {
        console.log("Newly added blog", addedBlog);
        this.blogs.push(addedBlog);
        console.log("Blogs after pushing new blog",this.blogs);
          // fetching the data after adding
        this.blogService.getBlogs().subscribe(
          (blogs: any[]) => {
            console.log("Fetching after adding a new blog",blogs);
            this.blogs = blogs;
          },
          (error) => {
            console.error("Error fetching blogs:", error);
          }
        );
      }
    },
    (error) => {
      console.error("Error adding blog:", error);
    }
  );


}

}
