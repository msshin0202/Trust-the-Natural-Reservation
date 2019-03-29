import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(`${this.baseUrl}/getProfile`, {
      withCredentials: true
    });
  }

  updateProfile(obj: any) {
    return this.http.post<any>(`${this.baseUrl}/updateProfile`, 
      obj, { withCredentials: true });
  }
}
