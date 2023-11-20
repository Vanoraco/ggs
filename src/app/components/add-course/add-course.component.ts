import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {MatTabsModule} from '@angular/material/tabs';
import { TabViewModule } from 'primeng/tabview'


interface Faq {
  Question: string;
  Answer: string;
}


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})



export class AddCourseComponent {

  courseForm!:FormGroup;

  faqs: Faq[] = [{
    'Question': '',
    'Answer': ''
  }];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      title:'' ,
      category:'',
      addCat: '',
      cat: '',
      text: '',
      parentCategory: '',
      img: '',
    });

}



get fc() {
  return this.courseForm.controls;
}

submit() {
  console.log({title: this.fc['title'].value, cat: this.fc['cat'].value , text: this.fc['text'].value, Acat: this.fc['addCat'].value, img:this.fc['img'].value});
}

addFaq() {
  var faq = {
    "Question":"",
    "Answer": "",
    }
  this.faqs.push(faq);
}

}
