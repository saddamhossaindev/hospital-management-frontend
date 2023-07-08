import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember_login: [''],
    });
  }

  handleLoginFormSubmission(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.loginService.login('http://hmapi.test/v1/auth/login', this.loginForm.value).subscribe(result => {
        console.log("Result from api", result);
        if(result.success){

          // Login the user by adding the token in the localStorage
          localStorage.setItem("token", result.user.api_token);

          // Keep the user data in localStorage
          const user = {
            id: result.user.id,
            name: result.user.name,
            email: result.user.email,
          }
          localStorage.setItem("user", JSON.stringify(user));

          this.router.navigate(['dashboard']);
        }else{
          console.log(result);
        }
      });
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
