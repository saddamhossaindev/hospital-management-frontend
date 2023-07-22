import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDoctor, IDoctorListResponse } from '../doctor.models';
import { DoctorService } from '../doctor.service';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit, OnDestroy {


  apiUrl = environment.apiUrl;
  // doctors$: Observable<IDoctorListResponse>;

  doctors: IDoctor[] = [];

  subscriptions = new SubSink();
  isDoctorDeleted = false;

  // doctorSubscription: Subscription;

  constructor(
    private doctorService: DoctorService,
  ){

  }
  
  ngOnInit(): void {
    // this.doctorSubscription = this.doctorService.getDoctors(`${this.apiUrl}/doctors`).subscribe(response => {
    //   if(response.success){
    //     this.doctors = response.doctors;
    //   }
    // });

    this.subscriptions.sink = this.doctorService.getDoctors(`${this.apiUrl}/doctors`).subscribe(response => {
      if(response.success){
        this.doctors = response.doctors;
      }
    });

    // Receiving data from api as Stream. 
    // this.doctors$ = this.doctorService.getDoctors(`${this.apiUrl}/doctors`);
  }


  deleteDoctor(id: number){
    console.log("Doctor Deleted.", id);
    this.isDoctorDeleted = false;

    this.subscriptions.sink = this.doctorService.deleteDoctors(`${this.apiUrl}/doctors/delete/${id}`).subscribe(result => {
      if(result.success){
        console.log("Doctor was deleted successfully.");
        this.isDoctorDeleted = true;
        this.doctors = this.doctors.filter(doctor => doctor.id !== id);
      }
    });
  }

  
  ngOnDestroy(): void {
    console.log("Doctor list component destroyed");
    // this.doctorSubscription.unsubscribe();
    this.subscriptions.unsubscribe();
  }


}
