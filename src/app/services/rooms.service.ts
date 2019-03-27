import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Room } from './room';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseUrl = 'http://localhost:3000/api';
  rooms: Room[];

  constructor(private http: HttpClient) {}

  getAvailableRooms(date) {
    return this.http.post<any>(`${this.baseUrl}/rooms`, { date })
  }

}
