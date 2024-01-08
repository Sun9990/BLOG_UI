import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CheckDialogComponent } from './components/check-dialog/check-dialog.component';

const routes: Routes = [
  { path:"", component: PostsComponent},
  { path:"home", component: PostsComponent},
  { path:"postdetails", component: PostDetailsComponent},
  { path:"postdetails/:id", component: PostDetailsComponent},
  { path:"check", component: CheckDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
