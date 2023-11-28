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

import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CoursedetailComponent,
    LoginComponent,
    CurriculumComponent,
    QuizComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
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
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
