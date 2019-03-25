import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { Room } from '../../services/room';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

export class RoomsComponent implements OnInit {
  baseUrl = 'http://localhost:3000/api';
  rooms: Room[];
  error = '';
  success = '';
        
  constructor(private roomsService: RoomsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getRooms(event): void {
    event.preventDefault(); 
    const target = event.target;
    const date = target.querySelector('#check-in').value;
    this.roomsService.getAvailableRooms(date).subscribe(data => {
      const ne: NavigationExtras = {
        state: {
          rooms: data
        }
      };
      this.router.navigate(['available'], ne);
    });

    console.log(date);
  }
}