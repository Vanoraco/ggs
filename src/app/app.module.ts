import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import  routeConfig  from './components/routes';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';

import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CoursedetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    AccordionModule,
   
    
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
