import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  checkOutCustomer(phoneNumber) {
    return this.http.post<any>(`${this.baseUrl}/checkout`, { phoneNumber })
  }

  displayRooms(phoneNumber) {
    return this.http.post<any>(`${this.baseUrl}/display`, { phoneNumber })
  }

  generateBill(phoneNumber, roomNumber) {
    return this.http.post<any>(`${this.baseUrl}/generate`, { phoneNumber, roomNumber })
  }
  
}
