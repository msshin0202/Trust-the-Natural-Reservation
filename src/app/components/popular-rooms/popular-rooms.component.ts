import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-popular-rooms',
  templateUrl: './popular-rooms.component.html',
  styleUrls: ['./popular-rooms.component.scss']
})
export class PopularRoomsComponent implements OnInit {

  popularRooms = [];

  constructor(private rooms: RoomsService) { }

  ngOnInit() {
  }

  getPopularRooms() {
    this.rooms.getPopularRooms().subscribe(data => {
      this.popularRooms = data.data;
      console.log(data);
    });
  }

  myFunction(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
