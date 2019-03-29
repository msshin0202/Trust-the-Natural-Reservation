import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  baseUrl = 'http://localhost/api';


  constructor(private http: HttpClient) { }

  checkInCustomer(reservationNumber) {
    return this.http.post<any>(`${this.baseUrl}/checkin`, { reservationNumber })
  }
}
