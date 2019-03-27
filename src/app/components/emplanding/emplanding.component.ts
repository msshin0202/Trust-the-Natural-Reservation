import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { EroomstatusService } from '../../services/eroomstatus.service';

@Component({
  selector: 'app-emplanding',
  templateUrl: './emplanding.component.html',
  styleUrls: ['./emplanding.component.scss']
})
export class EmplandingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private EroomstatusService: EroomstatusService) { }

  ngOnInit() {
  }

  getRoomStatus(){
    console.log("emplanding.component");
    this.EroomstatusService.getRoomStatus().subscribe(data => {
      console.log(data);})
  }
}
