import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  checkOutCustomer(phoneNumber) {
    return this.http.post<any>(`${this.baseUrl}/checkout`, { phoneNumber })
  }
}
