import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { EroomstatusService } from '../../services/eroomstatus.service';

@Component({
  selector: 'app-eroomstatus',
  templateUrl: './eroomstatus.component.html',
  styleUrls: ['./eroomstatus.component.scss']
})
export class EroomstatusComponent implements OnInit {
  rooms: [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ersser: EroomstatusService) {

  this.rooms = this.ersser.getRoomStatus();
  
  // let objroomsprops = Object.keys(objrooms);
  // for (let room of objroomsprops){
  //   this.rooms.push(objroomsprops[room]);
  // }
  // localStorage.removeItem('Array');
  // localStorage.setItem('Array', JSON.stringify(this.rooms));

 }

  ngOnInit() {
    //this.rooms = JSON.parse(JSON.stringify(this.rooms));
  }

}
