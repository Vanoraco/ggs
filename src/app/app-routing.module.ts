import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { HomeComponent } from './components/home/home.component';

import { CurriculumComponent } from './components/curriculum/curriculum.component';

import { QuizComponent } from './components/quiz/quiz.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { CoursepageComponent } from './components/coursepage/coursepage.component';


    



const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, 

  {
    path: 'add-course', component: AddCourseComponent
  },
  {path: 'curr', component: CurriculumComponent},
  {path: '', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'cont', component:ContactusComponent},
  {path:'coursedet', component:CoursedetailComponent},
  {path: 'coursepage', component:CoursepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
