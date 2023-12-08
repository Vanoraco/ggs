import { Component } from '@angular/core';
import { Course } from 'src/app/shared/models/Courses';
import { CourseService } from 'src/app/services/course.service';
import { Teacher } from 'src/app/shared/models/Teachers';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses: Course[] = [];
  teachers: Teacher[] = [];
  

 applyForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
 });

 submitApp() {
  console.log('Succeeded')
 }

 

  constructor(private courseService: CourseService, 
    private teacherService: TeacherService, activatedRoute: ActivatedRoute,) {

    let courseObservable: Observable<Course[]>;
    let teacherObservable: Observable<Teacher[]>;

    activatedRoute.params.subscribe(() => {
 
      courseObservable = courseService.getAll()

      courseObservable.subscribe(serverCourses => {
        this.courses = serverCourses
      })
      
      teacherObservable = teacherService.getAll()

      teacherObservable.subscribe(serverTeachers => {
        this.teachers = serverTeachers;
      })
    })

  
  }

  
}
