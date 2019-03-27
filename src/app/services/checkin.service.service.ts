import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  checkIn(rid) {
    return this.http.post<any>(`${this.baseUrl}/rooms`, { rid });
  }
}
