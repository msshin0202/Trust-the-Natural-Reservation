import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-checkout-checkin',
  templateUrl: './checkout-checkin.component.html',
  styleUrls: ['./checkout-checkin.component.scss']
})
export class CheckoutCheckinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkOutCustomer(event) {
    event.preventDefault();
    const target = event.target;
    const phoneNumber = target.querySelector('#phoneNumber').value;
    let navigationExtras: NavigationExtras = {
      queryParams: {
          phoneNumber: phoneNumber
      }
    };
    this.router.navigate(['/display'], navigationExtras);
  }

  checkInCustomer(event) {
    event.preventDefault();
    const target = event.target;
    const reservationNumber = target.querySelector('#reservationNumber').value;
    let navigationExtras: NavigationExtras = {
      queryParams: {
          reservationNumber: reservationNumber
      }
    };
    this.router.navigate(['/checkin'], navigationExtras);
  }

}
