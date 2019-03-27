import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EroomstatusService {
 baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


    getRoomStatus(){
      console.log("hi");
      return this.http.get<any>(`${this.baseUrl}/roomstatus`)
    }
}
