import { Component, OnInit } from '@angular/core';
import { CustUserService } from 'src/app/services/cust-user.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.sass']
})
export class AnalyticsComponent implements OnInit {
  customers = [];

  constructor(private custUserService: CustUserService) { }

  ngOnInit() {
    this.custUserService.getCustReservedAllRooms().subscribe(data => {
      console.log(data);
      this.customers = data;
      console.log(this.customers);
    })
  }

}
