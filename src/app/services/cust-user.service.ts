import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CustUserService {
  baseUrl = 'http://localhost:8888/api';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>(`${this.baseUrl}/databasemock`);
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>(`${this.baseUrl}/isloggedin`);
  }

  logout() {
    return this.http.get<logoutStatus>(`${this.baseUrl}/logout`)
  }
}  
