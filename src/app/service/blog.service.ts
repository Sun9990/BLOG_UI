import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = "http://127.0.0.1:5000"

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any[]>{
    const endpoint = "/get_blog";
    const url = this.apiUrl + endpoint;
    return this.http.get<any[]>(url);
  }


  deleteBlog(blog_id : string): Observable<any>{
    const url = `${this.apiUrl}/delete_blog/${blog_id}`;
    return this.http.delete<any>(url);
  }

  addBlog(blog : any): Observable<any>{
    const url = `${this.apiUrl}/add_blog`;
    return this.http.post<any>(url, blog);
  }

  getBlogDetails(blog_id : any): Observable<any>{
    const url = `${this.apiUrl}/get_blog_details/${blog_id}`;
    return this.http.get<any>(url);
  }

  updateBlog(blog_id:any, blog:any): Observable<any>{
    const url = `${this.apiUrl}/update_blog/${blog_id}`;
    const data ={"data":blog};
    return this.http.put<any>(url, data);
  }
}