import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  submitEmployeeSignUp(firstName, lastName, email, 
    password, passwordConfirm, gender, role, address) {
      let signupKind = "employee";
      return this.http.post<any>(`${this.baseUrl}/signup`, { 
        signupKind, firstName, lastName, email, 
        password, passwordConfirm, gender, role, address
      }, { withCredentials: true });
    }

  submitCustomerSignUp(firstName, lastName, email, phoneNumber,
    password, passwordConfirm) {
      let signupKind = "customer";
      return this.http.post<any>(`${this.baseUrl}/signup`, { 
        signupKind, firstName, lastName, email, phoneNumber, 
        password, passwordConfirm
      }, { withCredentials: true });
    }
}
