<<<<<<< HEAD
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
  baseUrl = 'http://localhost:3000/api';
  rooms: Room[];

  constructor(private http: HttpClient) {}

  getAvailableRooms(date) {
    return this.http.post<myData>(`${this.baseUrl}/rooms`, { date })
  }

}
=======
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
>>>>>>> 06de8f93df79adda3f23263ef074412f09168d3e
