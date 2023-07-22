import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor, IDoctorListResponse } from './doctor.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  doctors$ = Observable<IDoctor[]>;

  constructor(
    private http: HttpClient 
  ) { }

  create(url: string, data: any): Observable<any> { 
    return this.http.post(url, data); 
  }

  getDoctors(url: string): Observable<IDoctorListResponse> { 
    return this.http.get<IDoctorListResponse>(url);
  }
}
