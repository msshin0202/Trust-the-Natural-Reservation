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
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  hasReservation(reservationNumber) {
    return this.http.post<Response>(`${this.baseUrl}/find`, { reservationNumber }, { withCredentials: true })
  }

  makeReservation(params) {
    return this.http.post<Response>(`${this.baseUrl}/reservation`, { params }, { withCredentials: true })
  }
}
