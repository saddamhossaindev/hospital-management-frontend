import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent {

  doctorForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
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
  }

  togglePassword () {
    this.showPassword = !this.showPassword;
  }
}
