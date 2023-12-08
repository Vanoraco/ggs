import { Injectable } from '@angular/core';
import { Course } from '../shared/models/Courses';
import { sample_course } from 'src/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { COURSE_URL } from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Course[]> {
    return this.http.get<Course[]>(COURSE_URL);
  }
}
