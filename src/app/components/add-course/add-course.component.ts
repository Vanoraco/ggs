import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {MatTabsModule} from '@angular/material/tabs';
import { TabViewModule } from 'primeng/tabview'
import { DropdownModule } from 'primeng/dropdown';


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
  vidSrc: any;
  label: any;
  selectedTextTab = false;
  selectedVideoTab = false;
  onNextLesson = true
  displaySection = false
  display = false
  displayLesson = false
  counter: number = 0;
  
  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.readAndPreview(file);
    }
  }

  onVideoSelected(event: any, secIndex:number): void {
    const vid = event.target.files[0];

    if(vid) {
      this.read(vid)
    }
    this.vidLoaded[secIndex+2].push(true)
  }

  read(vid: File): void {
     const reader = new FileReader();

     reader.onload = (e: any) => {
         this.vidSrc = '../../../assets/Images/spinner.gif'
     }

     reader.readAsDataURL(vid)
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

  lessonType: string[][] = [[]];
  vidLoaded: boolean[][] = [[]];
  

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
addLesson(secIndex: number) {
   this.sectionLessons(secIndex).push(this.newLesson())
}

changeDisplay() {
  this.displaySection = true
  this.displayLesson = false
}

removeSection(secIndex:number) {
  this.sections().removeAt(secIndex);
}

removeSectionLesson(secIndex:number,lessonIndex:number) {
  this.sectionLessons(secIndex).removeAt(lessonIndex);
}
 

addSection() {
  this.sections().push(this.newSection())
  this.lessonType.push([])
  this.displaySection = true
  this.displayLesson = false
  this.vidLoaded.push([])
}

addTextLesson(secIndex: number) {
  this.sectionLessons(secIndex).push(this.newLesson())
  this.displayLesson = true
  this.displaySection = false
  this.selectedTextTab = true
  this.selectedVideoTab = false
  this.lessonType[secIndex+1].push('text')
}

addVideoLesson(secIndex: number) {
  this.sectionLessons(secIndex).push(this.newLesson())
  this.displayLesson = true
  this.displaySection = false
  this.selectedVideoTab = true
  this.selectedTextTab = false
  this.lessonType[secIndex+1].push('video')
  this.vidLoaded.push([])
}


submit() {
  console.log({title: this.fc['title'].value, cat: this.fc['cat'].value , text: this.fc['text'].value, Acat: this.fc['addCat'].value, img:this.fc['img'].value,
               faq: this.faqAliase.value, section: this.sections().value,ld:this.lessonType, co: this.lessonType.length});
}

addFaq() {
  
    this.faqAliase.push(this.newFaq());
    this.display = true
}

removeFaq(i: number) {
  this.faqAliase.removeAt(i)
}





}



