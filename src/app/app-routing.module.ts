import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
      path: '', component: HomeComponent
    }, 
    {
      path: 'add-course', component: AddCourseComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
