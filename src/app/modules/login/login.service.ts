import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient 
  ) { }

  public login(url: string, data: any): Observable<any> { 
    return this.http.post(url, data); 
  }
}
