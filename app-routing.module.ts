import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './post/posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'users/user_details/:id',
    component:UserDetailsComponent
  },
  {
    path:'users/user_details/posts/:id',
    component:PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
