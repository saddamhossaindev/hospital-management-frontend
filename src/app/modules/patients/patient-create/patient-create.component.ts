import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent {
  patientForm: FormGroup;
  apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ){
    this.patientForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    console.log(this.patientForm.value);

    if(this.patientForm.valid){
      this.patientService.create(`${this.apiUrl}/patients`, this.patientForm.value).subscribe(result => {
        console.log("Result from api", result);
        if(result.success){
          this.router.navigate(['patients']);
        }else{
          console.log(result);
        }
      });
    }else{
      this.patientForm.markAllAsTouched();
    }
  }
}
