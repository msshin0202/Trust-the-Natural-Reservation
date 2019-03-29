import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-checkout-checkin',
  templateUrl: './checkout-checkin.component.html',
  styleUrls: ['./checkout-checkin.component.scss']
})
export class CheckoutCheckinComponent implements OnInit {

  constructor(private router: Router, private reservationService: ReservationService) { }

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
    this.reservationService.hasReservation(reservationNumber).subscribe(data => {
      console.log(data);
      console.log(data.success);
      if (data.success == true) {
        let navigationExtras: NavigationExtras = {
          queryParams: {
              reservationNumber: reservationNumber
          }
        };
        this.router.navigate(['/checkin'], navigationExtras);
      } else {
        window.alert("Reservation number is either empty or doesn't exist!");
      }
    })
  }

}
