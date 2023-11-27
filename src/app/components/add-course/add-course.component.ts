import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {MatTabsModule} from '@angular/material/tabs';
import { TabViewModule } from 'primeng/tabview'


interface Faq {
  Question: string;
  Answer: string;
}

interface Lesson {
  title: string;
  duration: string;
  shortDes: string;
  content: string;
  material: string
}

interface Section {
  title: string;
}


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})



export class AddCourseComponent {

  
  imageSrc: any;
  label: any;
  selectedTab = '';
  display = false
  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.readAndPreview(file);
    }
  }

  readAndPreview(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  onChange(event: any) {
    const target = event.target;
    const label = target.options[target.selectedIndex].label;
     this.label = label;
  }

  courseForm!:FormGroup;
  faqs: Faq[] = [{
    'Question': '',
    'Answer': ''
  }];

  faqForm!: FormGroup;

  section: Section[] = [{
    'title':''
  }]

  lesson: Lesson[] = [{
    'title': '',
    'duration': '',
    'shortDes': '',
    'content': '',
    'material': ''
  }]

  

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
   
    this.faqForm = this.formBuilder.group({
      aliases: this.formBuilder.array([
        
      ])
    })

    this.addFaq()

}



get fc() {
  return this.courseForm.controls;
}

get faqAliase() {
  return this.faqForm.get('aliases') as FormArray;
}

newFaq(): FormGroup {
  return this.formBuilder.group({
    question: '',
    answer: '',
  })
}


submit() {
  console.log({title: this.fc['title'].value, cat: this.fc['cat'].value , text: this.fc['text'].value, Acat: this.fc['addCat'].value, img:this.fc['img'].value,
               faq: this.faqAliase.value});
}

addFaq() {
  
    this.faqAliase.push(this.newFaq());
  
}

addSection() {
  var section = {
    'title': ''
  }
  this.section.push(section);
}

addLesson() {
  var lesson = {
    'title': '',
    'duration': '',
    'shortDes': '',
    'content': '',
    'material': ''
  }
  this.lesson.push(lesson);
  this.display = true
}

isTextClicked() {
  this.selectedTab = 'text';
}

isVideoClicked() {
  this.selectedTab = 'video';
}

}



