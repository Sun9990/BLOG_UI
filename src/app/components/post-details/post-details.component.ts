import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Blog';
import { BlogService } from 'src/app/service/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DialogService } from 'src/app/service/dialog.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  blog : any;
  blogId : any;
  // setDesc : boolean = true;
  constructor( private blogService: BlogService,
               private activatedRoute:  ActivatedRoute,
               private dialogService: DialogService,
               private dialog: MatDialog,
               private router: Router){}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
      let id = params.get('id');
     //  console.log(params);
     //  console.log("id",id)
     this.blogId = id;
     // console.log("blogId in OnInit",this.blogId)
     //this.route.snapshot.paramMap.get('_id');
   });

    this.blogService.getBlogDetails(this.blogId).subscribe(
      {
        next : (res) =>{
          this.blog = res[0];
          console.log("res",res);
         
        },
        error : (e) => console.error(e),
        complete : ()=>{
          console.log("Complete");
        }
      } 
    );
  }

  deletePost(blog : any){
    this.dialogService.openConfirmDialog("Are you sure you want to delete this blog?")
    .afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
        console.log("BLOG :", blog);
            console.log("ID : ", blog._id["$oid"]);
            var blog_id : string = blog._id["$oid"];
            this.blogService
            .deleteBlog(blog_id)
            .subscribe(
              {
                next : (res) =>{
                // this.setDesc = !this.setDesc;
                console.log(res);
                this.router.navigate(["/home"]);
                },
                error : (e) => console.error(e),
                complete : ()=>{
                  console.log("Complete");
                }
              } 
            )
      }
    });
  }

    editedBlog(blog:any){
      console.log("Within editBlog: ",blog);
      this.blogService.updateBlog(this.blogId, blog).subscribe(
      {
        next : (res) =>{
          console.log("res",res);
          //getting details after editing
          this.blogService.getBlogDetails(this.blogId).subscribe(
            {
              next : (res) =>{
                this.blog = res[0];
                console.log("blog",this.blog);
                console.log("res",res);
               
              },
              error : (e) => console.error(e),
              complete : ()=>{
                console.log("Complete");
              }
            } 
          );
        },
        error : (e) => console.error(e),
        complete : ()=>{
          console.log("Complete");
        }
      } 
    )
    
  }

  
}
