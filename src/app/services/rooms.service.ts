import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Room } from './room';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseUrl = 'http://localhost/api';
  rooms: Room[];

  constructor(private http: HttpClient) {}

  getAvailableRooms(date) {
    return this.http.post<myData>(`${this.baseUrl}/rooms`, { date })
  }
}
