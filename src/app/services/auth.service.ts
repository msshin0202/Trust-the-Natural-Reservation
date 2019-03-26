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

  constructor(private http: HttpClient) { }

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
    })
  }

  getUserDetails(username, password) {
    return this.http.post<myData>(`${this.baseUrl}/auth`, {
      username,
      password
    })
  }
}
