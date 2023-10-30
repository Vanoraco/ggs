import { Component } from '@angular/core';
import { Course } from 'src/app/shared/models/Courses';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getAll()
  }
}
