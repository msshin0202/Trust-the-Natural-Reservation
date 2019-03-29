import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAvailableRooms(date) {
    return this.http.post<any>(`${this.baseUrl}/rooms`, { date })
  }

  getDirtyRooms(){
    return this.http.post<any>(`${this.baseUrl}/view-dirty-rooms`, {})
  }

  cleanRoom(roomNumber){
    return this.http.post<any>(`${this.baseUrl}/clean-room`, { roomNumber })
  }

  getPopularRooms() {
    return this.http.post<any>(`${this.baseUrl}/popular-rooms`, {})
  }

  getReservedRooms(phoneNumber: any, requestType: string) {
    console.log(phoneNumber);
    return this.http.post<any>(`${this.baseUrl}/reserved-rooms`, { phoneNumber, requestType }, { withCredentials: true });
  }

  cancelReservation(requestType: string, reservationNumber: any) {
    console.log('right here', reservationNumber);
    return this.http.post<any>(`${this.baseUrl}/reserved-rooms`, { requestType, reservationNumber }, { withCredentials: true });
  }
}
