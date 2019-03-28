import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-view-dirty-rooms',
  templateUrl: './view-dirty-rooms.component.html',
  styleUrls: ['./view-dirty-rooms.component.scss']
})
export class ViewDirtyRoomsComponent implements OnInit {

  dirtyRooms = [];

  constructor(private rooms: RoomsService) { }

  ngOnInit() {
    // this.dirtyRooms = JSON.parse(localStorage.getItem('array'));
  }

  getDirtyRooms(event) {
    event.preventDefault();
    this.rooms.getDirtyRooms().subscribe(data => {
      console.log(data);
      this.dirtyRooms = data.data;
    });
  }

  cleanRoom(event, roomNumber){
    event.preventDefault();
    this.rooms.cleanRoom(roomNumber).subscribe(data => {
      if (data.data == null){
        this.dirtyRooms.length = 0;
      } else {
        this.dirtyRooms = data.data;
      }
    });
  }

  myFunction(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
