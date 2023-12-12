import { Injectable } from '@angular/core';
import { CourseDet } from '../shared/models/coursedetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CoursedetailService {
  baseUrl = "http://localhost:5000/api/courses/Allcourses";
  constructor(private http: HttpClient) { }

  getAllCoursedet(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getCourseDetById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `/${id}`);
  }

}