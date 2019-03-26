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

  submitCash(bid, amount) {
    console.log("submitted via cash");
    this.http.get(`${this.baseUrl}/pay`).subscribe((data) => console.log(data))
    // this.http.post<any>(`${this.baseUrl}/pay`, { bid, amount })
    // .subscribe((data) => {
    //   console.log(data);
    //   console.log('got data from backend');
    // })
  }

  submitCreditCard(bid, amount, cardHolderName, creditCardNumber, expirary, svc) {
    console.log("submitted via credit");
    this.http.post<any>(`${this.baseUrl}/pay`, { bid, amount, cardHolderName, creditCardNumber, expirary, svc })
    .subscribe((data) => {
      console.log('got data from backend');
    })
  }
}
