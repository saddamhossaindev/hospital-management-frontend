import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent {

  doctorForm: FormGroup;
  showPassword = false;
  apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
  ){
    this.doctorForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      image: ['', [Validators.required]],
      department: ['', [Validators.required]],
      education: ['', [Validators.required]],
      experience: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    console.log(this.doctorForm.value);

    if(this.doctorForm.valid){
      this.doctorService.create(`${this.apiUrl}/doctors/create`, this.doctorForm.value).subscribe(result => {
        console.log("Result from api", result);
        if(result.success){
          this.router.navigate(['doctors']);
        }else{
          console.log(result);
        }
      });
    }else{
      this.doctorForm.markAllAsTouched();
    }
  }

  togglePassword () {
    this.showPassword = !this.showPassword;
  }
}
