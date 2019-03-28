import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-view-reservations',
  templateUrl: './view-reservations.component.html',
  styleUrls: ['./view-reservations.component.scss']
})
export class ViewReservationsComponent implements OnInit {

  phoneNumber: string;
  firstName: string;
  lastName: string;
  rooms = [];
  date = {};
  toggle = false;
  postRequestType: string;
  // reservationNumber: 

  constructor(private roomsService: RoomsService) {}

  ngOnInit() {
    this.rooms = JSON.parse(localStorage.getItem('array'));
    this.toggle = localStorage.getItem('toggle') == 'true';

    // this.viewReservationsService.readCustomerProfileAndRes().subscribe(data => {
    //   console.log(data);
    //   if (data.success) {
    //     this.email = data.content.email;
    //     this.firstName = data.content.firstName;
    //     this.lastName = data.content.lastName;
    //     this.password = data.content.password;
    //     if (data.userType === "customer") {
    //       this.phoneNumber = data.content.phoneNumber;
    //       this.isCustomer = true;
    //       this.isEmployee = false;
    //     } else if (data.userType === "employee") {
    //       this.gender = data.content.gender;
    //       this.role = data.content.role;
    //       this.address = data.content.address;
    //       this.isEmployee = true;
    //       this.isCustomer = false;
    //     }
    //   }
    // });
  }

  getReservedRooms(event): void {
    event.preventDefault(); 
    const target = event.target;
    this.phoneNumber = target.querySelector('#phoneNumberCust').value;
    this.postRequestType = "view";
    this.roomsService.getReservedRooms(this.phoneNumber, this.postRequestType).subscribe(result => {
      this.rooms = result.content;
      console.log(this.rooms);
      localStorage.removeItem('array');
      localStorage.setItem('array', JSON.stringify(this.rooms));
      localStorage.removeItem('toggle');
      localStorage.setItem('toggle', 'true');
      this.toggle = true;
    });
  }

  myFunction(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}
