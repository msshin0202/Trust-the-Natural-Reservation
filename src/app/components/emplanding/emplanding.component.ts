import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { EroomstatusService } from '../../services/eroomstatus.service';

@Component({
  selector: 'app-emplanding',
  templateUrl: './emplanding.component.html',
  styleUrls: ['./emplanding.component.scss']
})
export class EmplandingComponent implements OnInit {
  total = 0;
  rooms = [];
  phoneNumber = '';

  constructor(private router: Router, private route: ActivatedRoute, private EroomstatusService: EroomstatusService) { }

  ngOnInit() {
    this.total = localStorage.getItem('total') === null ? 0 : +localStorage.getItem('total');
    this.total = localStorage.getItem('rooms') === null ? [] : JSON.parse(localStorage.getItem('rooms'));
  }

  ngOnDestroy() {
    localStorage.removeItem('total');
    localStorage.removeItem('rooms');
  }
}
