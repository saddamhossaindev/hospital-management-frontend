import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDoctorListResponse } from '../doctor.models';
import { DoctorService } from '../doctor.service';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit, OnDestroy {


  apiUrl = environment.apiUrl;
  doctors$: Observable<IDoctorListResponse>;

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

    // Receiving data from api as Stream.
    this.doctors$ = this.doctorService.getDoctors(`${this.apiUrl}/doctors`);
  }

  ngOnDestroy(): void {
    console.log("Doctor list component destroyed");
    // this.doctorSubscription.unsubscribe();
  }





}
