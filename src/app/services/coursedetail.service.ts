import { Injectable } from '@angular/core';
import { CourseDet } from '../shared/models/coursedetail'; 
@Injectable({
    providedIn: 'root'
})

export class CoursedetailService{
protected CourseDetailList: CourseDet[] = [

{
    id: 1,
    coursename: 'Race, Gender and Culture',
    
    role: 'Teacher',
    name: 'FASIL GETIE',
    photo: 'https://lms.goodgradestudent.com/wp-content/uploads/stm_lms_avatars/stm_lms_avatar8.jpg?v=1686311306',
    category:'SCIENCES ENVIRONNEMENTALES' ,

    description:'The primary goal of this quick start guide is to introduce you to Unreal Engine 4’s (UE4) development environment. By the end of this guide, you’ll know how to set up and develop C++ Projects in UE4. This guide shows you how to create a new Unreal Engine project, add a new C++ class to it, compile the project, and add an instance of a new class to your level. By the time you reach the end of this guide, you’ll be able to see your programmed Actor floating above a table in the level.',
    curriculum:'',
    faq:'',
    announcement:'',
    

    enrolled:'36 students',
    duration:' 10 hours',
    lectures:11,
    video:'9 hours',
    level:2
    
}

];

getAllCoursedet(): CourseDet[] {
    return this.CourseDetailList;
  }
  getCourseDetById(id: number): CourseDet | undefined {
    return this.CourseDetailList.find(courseDet => courseDet.id === id);
  }
  
}