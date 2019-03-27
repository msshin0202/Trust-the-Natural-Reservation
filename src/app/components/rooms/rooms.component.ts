import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { Router, NavigationExtras } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

export class RoomsComponent implements OnInit {
  baseUrl = 'http://localhost:3000/api';
  rooms = [];
  date = {};
  toggle = false;
        
  constructor(private roomsService: RoomsService, private reservationService: ReservationService, private router: Router) {
  }

  ngOnInit(): void {
    this.rooms = JSON.parse(localStorage.getItem('array')) === null ? [] : JSON.parse(localStorage.getItem('array'));
    this.toggle = localStorage.getItem('toggle') == 'true';
  }

  ngOnDestroy(): void {
    localStorage.removeItem('array');
    localStorage.removeItem('toggle');
  }

  getRooms(event): void {
    event.preventDefault();
    const target = event.target;
    const checkInDate = target.querySelector('#check-in').value;
    const checkOutDate = target.querySelector('#check-out').value;
    const date = {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    }
    this.date = date;
    this.roomsService.getAvailableRooms(date).subscribe(data => {
      this.rooms = data.data;
      localStorage.removeItem('array');
      localStorage.setItem('array', JSON.stringify(this.rooms));
      localStorage.removeItem('toggle');
      localStorage.setItem('toggle', 'true');
      this.toggle = true;
    });
  }

  reserve(event, roomNumber): void {
    event.preventDefault();
    console.log(roomNumber);
    const param = {
      date: this.date,
      roomNumber: roomNumber
    }
    this.reservationService.makeReservation(param).subscribe(data => {
      const ne: NavigationExtras = {
        state: {
          data: data
        }
      };
      console.log(data)
      this.router.navigate(['confirmation'], ne);
    });
  }

  myFunction(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}