import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import routeConfig from './components/routes';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';

import { AccordionModule } from 'primeng/accordion';
import { LoginComponent } from './components/login/login.component';
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

import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SidebarModule } from 'primeng/sidebar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuizComponent } from './components/quiz/quiz.component';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastrModule } from 'ngx-toastr';
import { TabViewModule } from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { CoursepageComponent } from './components/coursepage/coursepage.component';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CoursedetailComponent,
    LoginComponent,

    AddCourseComponent

    CurriculumComponent,
    QuizComponent,
    ContactusComponent,
    CoursepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,

    EditorModule,
    ButtonModule,
    TooltipModule,
    TabViewModule,
    ConfirmDialogModule,
    InputTextareaModule,
    OverlayPanelModule,

    FormsModule,
    MatListModule,

    ReactiveFormsModule,
    DropdownModule,
    AccordionModule,


    MatSlideToggleModule,

    SidebarModule,
    PaginatorModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    EditorModule,
    DropdownModule,
    InputTextModule,
    TabViewModule,
    ToastrModule.forRoot(),
    RatingModule,
    PanelModule,
    CheckboxModule,
    MatAutocompleteModule,

    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
