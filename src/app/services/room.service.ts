import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  baseUrl = 'http://localhost/api';
  rooms: [];

  constructor(private http: HttpClient) {}

  getRoom(id): Observable<Object[]> {
    return this.http.post<any>(`${this.baseUrl}/room`, { id })
  }
}
