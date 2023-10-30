import { Injectable } from '@angular/core';
import { Course } from '../shared/models/Courses';
import { sample_course } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAll(): Course[] {
    return sample_course;
  }
}
