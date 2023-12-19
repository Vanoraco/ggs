import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  registerForm! : FormGroup
     constructor(private fb: FormBuilder) {
      
     }

     ngOnInit(): void {
      this.loginForm = this.fb.group(
        {
          username: '',
          password: ''
        }
      )
      this.registerForm = this.fb.group(
        {
          regusername: '',
          regpassword: '',
          regconfirmPassword: '',
          regemail: ''
        }
      )
     } 
  
     get login() {
      return this.loginForm.controls;
    }

    get register() {
      return this.registerForm.controls
    }

    submitLogin() {
     console.log({ user: this.login['username'].value, pass: this.login['password'].value}) 
    }

    submitRegister() {
    console.log({ username: this.register['regusername'].value, regpass: this.register['regpassword'].value, regconfpas: this.register['regconfirmPassword'].value, regemail: this.register['regemail'].value})
    }

}