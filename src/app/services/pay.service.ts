import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  submitCash(bid, amount, phoneNumber, isCash) {
    console.log("submitted via cash");
    this.http.post<any>(`${this.baseUrl}/pay`, { bid, amount, phoneNumber, isCash })
    .subscribe((data) => {
      console.log(data);
      console.log('got data from backend');
    })
  }
  // for this project, although we get input from customer about payment info, we do not check whether
  // payment is valid nor do we store it in the DB, thus we don't need to pass it onto the backend to process the information.
  submitCreditCard(bid, amount, phoneNumber, isCash) {
    console.log("submitted via credit");
    this.http.post<any>(`${this.baseUrl}/pay`, { bid, amount, phoneNumber, isCash })
    .subscribe((data) => {
      console.log(data);
      console.log('got data from backend');
    })
  }
}
