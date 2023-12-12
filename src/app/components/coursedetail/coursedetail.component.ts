import { Component, OnInit } from '@angular/core';
import { CourseDet } from 'src/app/shared/models/coursedetail';
import { CoursedetailService } from 'src/app/services/coursedetail.service';
import { initFlowbite } from 'flowbite';
import { FaqService } from 'src/app/services/faq.service';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/Courses';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  htmlEditor: string = '';
  [x: string]: any;
  courseDetail: CourseDet[] = []
  selectedCourse = '';
  courses: Course[] = [];
  value!: number;
  faqs: any[] = [];

  constructor(private coursedetailservice: CoursedetailService, 
    private faqService: FaqService,private courseService: CourseService, private activatedRoute: ActivatedRoute) {

    this.coursedetailservice.getAllCoursedet().subscribe(res => {
      this.courseDetail = res;
      console.log(res);

    });

    let courseObservable: Observable<Course[]>;

    
    activatedRoute.params.subscribe(() => {
      
      courseObservable = courseService.getAll()

      courseObservable.subscribe(serverCourses => {
        this.courses = serverCourses
      })
      
    })
  }

  ngOnInit(): void {
    initFlowbite();
    this.loadFaqs();
  }
  loadFaqs(): void {
    this.faqService.getFaqs().subscribe((data) => {
      this.faqs = data;
    });
  }
}

