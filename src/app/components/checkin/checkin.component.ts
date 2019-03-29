import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';


interface User {
  reservationNumber: string
}

interface RoomInfo {
  roomNumber: number,
  duration: number,
  price: number,
  numberOfBeds: number
}
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  reservationNumber = '';
  roomInfo: RoomInfo;

  constructor(private route: ActivatedRoute, private checkin: CheckinService) {
    this.route.queryParams.subscribe(params => {
      this.reservationNumber = params["reservationNumber"];
      localStorage.setItem('reservationNumber', this.reservationNumber);
      console.log(this.reservationNumber);
  });
  }

  ngOnInit() {
  }

  viewRoomInformation(event) {
    event.preventDefault();
    this.checkin.checkInCustomer(this.reservationNumber).subscribe(data => {
      this.roomInfo = data;
      console.log("got data from backend");
      console.log(data);
    })
  }

}
