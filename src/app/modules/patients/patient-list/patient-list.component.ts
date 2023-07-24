import { Component, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPatient } from '../patient.models';
import { SubSink } from 'subsink';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  apiUrl = environment.apiUrl;
  patients: IPatient[] = [];
  subscriptions = new SubSink();
  isPatientDeleted = false;

  // Dependency Inject using inject function
  // patientService = inject(PatientService);

  constructor(
    private patientService: PatientService
  ){}

  ngOnInit(): void {
    console.log("On Init Called.");
    // this.patientService.getPatients(`${this.apiUrl}/patients`)
    this.patientService.getPatients(`${this.apiUrl}/patients`).subscribe(result => {
      if(result.success){
        this.patients = result.patients;
      }
    });
  }

  deletePatient(id: number){
    this.patientService.deletePatient(`${this.apiUrl}/patients/${id}`).subscribe(result => {
      if(result.success){
        this.isPatientDeleted = true;
        this.patients = this.patients.filter(patient => patient.id !== id);
      }
    });
  }
}
