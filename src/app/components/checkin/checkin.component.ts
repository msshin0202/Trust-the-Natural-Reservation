import { Component, OnInit } from '@angular/core';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  // baseUrl = 'http://localhost:3000/api';

  constructor(private checkinService: CheckinService) { }

  ngOnInit() {
  }

  // onSubmit(event) {

  //   event.preventDefault();

  //     const target = event.target;
  //     const bid = target.querySelector('#bid').value;
  //     const amount = target.querySelector('#amount').value;
  //     const phoneNumber = target.querySelector('#phoneNumber').value;
  //     if (this.isCreditCard) {
  //       const cardHolderName = target.querySelector('#cardHolderName').value;
  //       const creditCardNumber = target.querySelector('#creditCardNumber').value;
  //       const expirary = target.querySelector('#expirary').value;
  //       const svc = target.querySelector('#svc').value;
  //       console.log(cardHolderName, creditCardNumber, expirary, svc);
  //       this.payService.submitCreditCard(bid, amount, phoneNumber, this.isCash);
  //     } else {

  //       this.payService.submitCash(bid, amount, phoneNumber, this.isCash);
  //     }
  //     console.log(bid, amount, phoneNumber);
  // }

  // creditCardPayment() {
  //   this.isCreditCard = true;
  //   this.isCash = false;
  // }

  // cashPayment() {
  //   this.isCash = true;
  //   this.isCreditCard = false;



}
