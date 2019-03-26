import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService} from '../../services/reservation.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  id = '';
  room = [];
        
  constructor(private roomService: RoomService, private reservationService: ReservationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getRoom(this.id);
  }

  getRoom(id): void {
    console.log(id)
    this.roomService.getRoom(id).subscribe(
      (res: any[]) => {
        this.room = res['data'];
        console.log(this.room);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  reserve(event): void {
    event.preventDefault(); 
    const target = event.target;
    const date = target.querySelector('#check-in').value;
    const fname = target.querySelector('#fname').value;
    const lname = target.querySelector('#lname').value;
    const phonenum = target.querySelector('#phonenum').value;
    const param = {
      date: date,
      fname: fname,
      lname: lname,
      phonenum: phonenum
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

}
