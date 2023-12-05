import { Component, OnInit } from '@angular/core';
import { CourseDet } from 'src/app/shared/models/coursedetail';
import { CoursedetailService } from 'src/app/services/coursedetail.service';
import { initFlowbite } from 'flowbite';
import { FaqService } from 'src/app/services/faq.service';

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
  value!: number;
  faqs: any[] = [];

  constructor(private coursedetailservice: CoursedetailService, private faqService: FaqService) {

    this.coursedetailservice.getAllCoursedet().subscribe(res => {
      this.courseDetail = res;
      console.log(res);

    });
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

