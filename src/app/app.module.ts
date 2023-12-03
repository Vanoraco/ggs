import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import routeConfig from './components/routes';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';

import { AccordionModule } from 'primeng/accordion';
import { LoginComponent } from './login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

import {InputTextareaModule} from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import {OverlayPanelModule} from 'primeng/overlaypanel';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { from } from 'rxjs';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CoursedetailComponent,
    LoginComponent,
    AddCourseComponent,
    AddLessonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    EditorModule,
    ButtonModule,
    TooltipModule,
    TabViewModule,
    ConfirmDialogModule,
    InputTextareaModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    DropdownModule,
    AccordionModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
