import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
  ){
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      robot_check: ['', [Validators.required]],
    });
  }

  handleRegisterFormSubmission(){
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      this.registerService.register(`${this.apiUrl}/auth/register`, this.registerForm.value).subscribe(result => {
        console.log("Result from api", result);
        if(result.success){
          this.router.navigate(['login']);
        }else{
          console.log(result);
        }
      });
    }
  }
}
