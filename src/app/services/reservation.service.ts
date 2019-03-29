import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface Response {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  hasReservation(reservationNumber) {
    return this.http.post<Response>(`${this.baseUrl}/find`, { reservationNumber })
  }

  makeReservation(params) {
    return this.http.post<Response>(`${this.baseUrl}/reservation`, { params })
  }
}
