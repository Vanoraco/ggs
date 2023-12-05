import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit{
  feedbackForm!: FormGroup;
  

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm(event: Event): void {
    event.preventDefault();
    const apiEndpoint = 'http://localhost:3000/feedback';
    this.http.post(apiEndpoint, this.feedbackForm.value)
      .subscribe(
        () => {       
          this.feedbackForm.reset();
          this.toastr.success('Your Message submitted successfully! ', 'Success');
        },
        error => {
          this.toastr.error('Failed to submit your message. Please try again.', 'Error');
        }
      );
  }
  

  
}
