import { Component, OnInit } from '@angular/core';
import { CustUserService } from '../../services/cust-user.service';
import { RoomsService } from '../../services/rooms.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-custlanding',
  templateUrl: './custlanding.component.html',
  styleUrls: ['./custlanding.component.scss']
})
export class CustlandingComponent implements OnInit {

  message = "loading...";
  constructor(private cust_user: CustUserService, private roomsService: RoomsService, private router: Router) { }

  ngOnInit() {
    this.cust_user.getData().subscribe(data => {
      this.message = data.message;
    });
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
