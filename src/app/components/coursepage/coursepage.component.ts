import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/models/Courses';

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent {
  currentView: string = 'grid';
  selectedTab: string = 'Tab 1';
 
  selectedCategories: any[] = [];
  courses: Course[] = [];
  
  constructor(private courseService: CourseService, activatedRoute: ActivatedRoute) {

    let courseObservable: Observable<Course[]>;

    activatedRoute.params.subscribe(() => {
      courseObservable.subscribe(serverCourses => {
        this.courses = serverCourses
      })
      
    })

  
  }
  

  categories: any[] = [
      { name: 'La photographie' },
      { name: 'Formation au logiciel'},
      { name: 'Sciences environnementales'},
      { name: 'Conception Matérielle' },
      { name: 'Musique' },
      { name: 'Art' },
      { name: 'Mathématiques' },
      { name: 'La biologie' },
      { name: 'Commercialisation' },
      { name: 'Bases de informatique' },
      { name: 'Électronique' },
      { name: 'Traitement Des signaux numériques' }
  ];
 status: any[] = [
    { name: 'Featured' },
    { name: 'Hot'},
    { name: 'New'},
    { name: ' Special' },
];
level: any[] = [
  { name: 'Débutant' },
  { name: 'Intermédiaire'},
  { name: 'Avancé'}

];

Instructors: any[] = [
  { name: ' Yordanos' },
  { name: 'Jhone Doe'},
  { name: 'Abera'},
  { name: '  James Smith' },
];
price: any[] = [
  { name: 'Free Courses' },
  { name: 'Paid Courses'},
  { name: 'Only Subscription'},

];

toggleView(view: string): void {
  this.currentView = view;
}
selectTab(tab: string) {
  this.selectedTab = tab;
}

}
