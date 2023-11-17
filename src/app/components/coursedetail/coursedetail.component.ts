import { Component} from '@angular/core';
import { CourseDet } from 'src/app/shared/models/coursedetail';
import { CoursedetailService } from 'src/app/services/coursedetail.service';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent {
  
  
  
[x: string]: any;
  courseDetail: CourseDet[] = []
  constructor(private coursedetailservice: CoursedetailService){
     this.courseDetail = this.coursedetailservice.getAllCoursedet();
  }
  
}

