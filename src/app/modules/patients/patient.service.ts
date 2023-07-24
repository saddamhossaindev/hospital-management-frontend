import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatientListResponse } from './patient.models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient
  ) { }

  create(url: string, data: any): Observable<any> { 
    return this.http.post(url, data); 
  }

  getPatients(url: string): Observable<IPatientListResponse> { 
    return this.http.get<IPatientListResponse>(url);
  }

  deletePatient(url: string): Observable<{success: boolean}> { 
    return this.http.delete<{success: boolean}>(url);
  }
}
