import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
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
          this.toastr.success('Feedback submitted successfully!', 'Success');
        },
        error => {
          this.toastr.error('Failed to submit feedback. Please try again.', 'Error');
        }
      );
  }
  openInGoogleMaps(): void {

    const url = `https://www.google.com/maps/place/CREAVERS+Service+P.L.C./@8.9917448,38.7859418,15.79z/data=!4m6!3m5!1s0x164b851d602d4021:0x34a8a982337dab6b!8m2!3d8.9945437!4d38.7906365!16s%2Fg%2F11hcp_pc0r?entry=ttu`;
    window.open(url, '_blank');
  }

}
