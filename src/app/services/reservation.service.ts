import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  makeReservation(params) {
    return this.http.post<myData>(`${this.baseUrl}/reservation`, { params })
  }
}
