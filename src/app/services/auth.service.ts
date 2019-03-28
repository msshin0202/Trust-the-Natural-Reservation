import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api';
  private loggedInStatus = false ;
  private userType = 'unknown';

  constructor(private http: HttpClient) { }

  setUserType(value: string) {
    this.userType = value;
  }

  get getUserType() {
    return this.userType;
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getCustomerDetails(username, password) {
    return this.http.post<myData>(`${this.baseUrl}/clogin`, {
      username,
      password
    }, {
      withCredentials: true
    })
  }

  getEmployeeDetails(username, password) {
    return this.http.post<myData>(`${this.baseUrl}/elogin`, {
      username,
      password
    }, {
      withCredentials: true
    })
  }

  getUserTypeDetails() {
    return this.http.get<myData>(`${this.baseUrl}/userType`, {
     withCredentials: true 
    })
  }

  getUserDetails(username, password) {
    return this.http.post<myData>(`${this.baseUrl}/auth`, {
      username,
      password
    })
  }

  logout() {
    return this.http.get<myData>(`${this.baseUrl}/logout`, {
      withCredentials: true
    })
  }
}
