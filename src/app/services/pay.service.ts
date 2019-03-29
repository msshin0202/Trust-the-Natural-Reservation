import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface payData {
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PayService {

  baseUrl = 'http://localhost/api';

  constructor(private router: Router, private http: HttpClient) { }

  submitCash(bid, amount, isCash){
    return this.http.post<payData>(`${this.baseUrl}/pay`, { bid, amount, isCash }, { withCredentials: true }).subscribe((data) => {
      window.alert(data.message);
      if (data.success) {
        this.router.navigate(['cust']);
      }
    });
  }
  // for this project, although we get input from customer about payment info, we do not check whether
  // payment is valid nor do we store it in the DB, thus we don't need to pass it onto the backend to process the information.
  submitCreditCard(bid, amount, isCash) {
    return this.http.post<payData>(`${this.baseUrl}/pay`, { bid, amount, isCash }, { withCredentials: true }).subscribe((data) => {
      window.alert(data.message);
      if (data.success){
        this.router.navigate(['cust']);
      }
    });
  }
}
