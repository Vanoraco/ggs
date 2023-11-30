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
  selectedTextTab = false;
  selectedVideoTab = false;
  onNextLesson = true
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
 
  faqForm!: FormGroup;

  curriForm!: FormGroup;

  lessonForm!: FormGroup;


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
      aliases: this.formBuilder.array([ ])
    })

    this.curriForm = this.formBuilder.group({
      sections: this.formBuilder.array([])
    })


    this.addFaq()

}



get fc() {
  return this.courseForm.controls;
}

get faqAliase() {
  return this.faqForm.get('aliases') as FormArray;
}

get curri() {
  return this.lessonForm.get('lesson') as FormArray;
}

get section() {
  return this.curriForm.get('section')?.get('lessons') as FormArray;
}

sections() {
  return this.curriForm.get('sections') as FormArray;
}


newFaq(): FormGroup {
  return this.formBuilder.group({
    question: '',
    answer: '',
  })
}

newLesson(): FormGroup {
  return this.formBuilder.group({
    title: '',
    textLesson: '',
    duration: '',
    videoLesson: '',
    material: ''
  })
}

newSection(): FormGroup {
  return this.formBuilder.group({
    sectionTitle: '',
    lessons: this.formBuilder.array([])
  })
}

sectionLessons(lesIndex:number) : FormArray {
  return this.sections().at(lesIndex).get("lessons") as FormArray
}
addLesson(lesIndex: number) {
   this.sectionLessons(lesIndex).push(this.newLesson())
   this.display = true
}

addSection() {
  this.sections().push(this.newSection())
  this.selectedTextTab = false
  this.selectedVideoTab = false
}


submit() {
  console.log({title: this.fc['title'].value, cat: this.fc['cat'].value , text: this.fc['text'].value, Acat: this.fc['addCat'].value, img:this.fc['img'].value,
               faq: this.faqAliase.value, section: this.sections().value});
}

addFaq() {
  
    this.faqAliase.push(this.newFaq());
  
}

removeFaq(i: number) {
  this.faqAliase.removeAt(i)
}


isTextClicked() {
  this.selectedTextTab = true;
  this.onNextLesson = false
  this.display = false
}

isVideoClicked() {
  this.selectedVideoTab = true;
  this.onNextLesson = false
  this.display = false
}

}



