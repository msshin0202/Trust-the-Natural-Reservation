import { Component, OnInit } from '@angular/core';
import { CustUserService } from '../../services/cust-user.service';

@Component({
  selector: 'app-custlanding',
  templateUrl: './custlanding.component.html',
  styleUrls: ['./custlanding.component.scss']
})
export class CustlandingComponent implements OnInit {

  message = "loading...";
  constructor(private cust_user: CustUserService) { }

  ngOnInit() {
    this.cust_user.getData().subscribe(data => {
      this.message = data.message;
    });
  }

}
