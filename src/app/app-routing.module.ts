import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './components/all-post/all-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  {
    path:'', redirectTo:'dashboard', pathMatch:'full'
  },
  {
    path:'dashboard', component:AllPostComponent
  },
  {
    path:'createpost', component:CreatePostComponent
  },
  {
    path:'createpost/:id', component:CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
