import { Injectable } from '@angular/core';
import { Course } from '../shared/models/Courses';

import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { COURSE_URL, COURSE__ADD_URL } from '../shared/models/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private toastrService: ToastrService) { }

  getAll():Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:5000/api/courses/Allcourses');
  }

  courseAdd(addCourse: any): Observable<any> {
      return this.http.post(COURSE__ADD_URL, addCourse)
  }
}
