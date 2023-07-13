import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nurse-create',
  templateUrl: './nurse-create.component.html',
  styleUrls: ['./nurse-create.component.css']
})
export class NurseCreateComponent {

  nurseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){
    this.nurseForm = this.fb.group({
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

  handleSubmit(){

  }
}
