import { Component } from '@angular/core';
import { Course } from 'src/app/shared/models/Courses';
import { CourseService } from 'src/app/services/course.service';
import { Teacher } from 'src/app/shared/models/Teachers';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private courseService: CourseService, private teacherService: TeacherService) {
    this.courses = this.courseService.getAll()
    this.teachers = this.teacherService.getAll()
  }
}
