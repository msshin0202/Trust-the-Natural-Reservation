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
  rooms = [];
  date = {};
        
  constructor(private roomsService: RoomsService, private reservationService: ReservationService, private router: Router) {
  }

  ngOnInit(): void {
    this.rooms = JSON.parse(localStorage.getItem('array')) === null ? [] : JSON.parse(localStorage.getItem('array'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('array');
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
      console.log(this.rooms);
      localStorage.removeItem('array');
      localStorage.setItem('array', JSON.stringify(this.rooms));
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

  showSnackbar(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}