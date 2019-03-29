import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { UpdateService } from '../../services/update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reservations',
  templateUrl: './view-reservations.component.html',
  styleUrls: ['./view-reservations.component.scss']
})
export class ViewReservationsComponent implements OnInit {

  phoneNumber: string;
  firstName: string;
  lastName: string;
  reservations = [];
  date = {};
  isEmployee: boolean;
  isCustomer: boolean;
  requestType: string;
  constructor(private updateService: UpdateService, private roomsService: RoomsService, private router: Router) {}

  ngOnInit() {
    this.updateService.getProfile().subscribe(data => {
      if (data.success) {
        if (data.userType === "employee") {
          this.phoneNumber = data.content.phoneNumber;
          this.isEmployee = true;
          this.isCustomer = false;
        }
      } 
    })
  }

  getReservedRooms(): void {
    event.preventDefault(); 
    this.requestType = "view";
    console.log(this.phoneNumber);
    console.log(this.phoneNumber, this.requestType);
    this.roomsService.getReservedRooms(this.phoneNumber, this.requestType).subscribe(data => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.reservations = data.content;
    });
  }

  cancelReservation(value: any): void {
    event.preventDefault(); 
    this.requestType = "cancel";
    let reservationNumber = value;
    this.roomsService.cancelReservation(this.requestType, reservationNumber).subscribe(data => {
      window.alert(data.message);
      this.router.navigate(['cust']);
    });
  }

  goBackToEmpLanding(): void {
    event.preventDefault();
    this.router.navigate(['employee']);
  }

  goBackToCustLanding(): void {
    event.preventDefault();
    this.router.navigate(['cust']);
  }
}
