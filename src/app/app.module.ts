import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsItemComponent } from './components/posts-item/posts-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { DetailsComponent } from './components/details/details.component';
import { EditPostsComponent } from './components/edit-posts/edit-posts.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CheckDialogComponent } from './components/check-dialog/check-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PostsComponent,
    PostsItemComponent,
    AddPostsComponent,
    PostDetailsComponent,
    DetailsComponent,
    EditPostsComponent,
    ConfirmDialogComponent,
    CheckDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatIconModule, 
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [PostsComponent, PostDetailsComponent,ConfirmDialogComponent]
})
export class AppModule { }
