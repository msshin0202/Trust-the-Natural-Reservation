import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustUserService } from '../../services/cust-user.service';

interface User {
  phoneNumber: string,
  fname: string,
  lname: string,
  email: string
}

interface Bill {
  id: number
}

@Component({
  selector: 'app-stayed-in',
  templateUrl: './stayed-in.component.html',
  styleUrls: ['./stayed-in.component.scss']
})

export class StayedInComponent implements OnInit {
  total = 0;
  rooms = [];
  phoneNumber = '';
  storage = ['total', 'rooms', 'phoneNumber'];
  user: User = {
    phoneNumber: '',
    fname: '',
    lname: '',
    email: ''
  };
  bill: Bill;

  constructor(private checkOutService: CheckoutService, private custUserService: CustUserService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.phoneNumber = params["phoneNumber"];
      localStorage.setItem('phoneNumber', this.phoneNumber);
      console.log(this.phoneNumber);
  });
  }

  ngOnInit() {
    this.total = localStorage.getItem('total') === null ? 0 : +localStorage.getItem('total');
    this.rooms = localStorage.getItem('rooms') === null ? [] : JSON.parse(localStorage.getItem('rooms'));
    this.phoneNumber = localStorage.getItem('phoneNumber') === null ? this.phoneNumber : localStorage.getItem('phoneNumber');
    // console.log(this.phoneNumber);
    this.displayRooms();
    this.getUserInfo();
  }

  ngOnDestroy() {
    for (var item of this.storage) {
      localStorage.removeItem(item);
    }
  }

  getUserInfo() {
    this.custUserService.getUserInfo(this.phoneNumber).subscribe(data => {
      console.log(data);
      this.user = data;
      localStorage.setItem('user', JSON.stringify(this.user));
    })
  }

  viewBalance(event) {
    event.preventDefault();
    this.checkOutService.checkOutCustomer(this.phoneNumber).subscribe(data => {
      console.log(data);
      this.total = +data.total > +data.paid ? +data.total - +data.paid : 0;
      localStorage.setItem('total', String(this.total));
    });
  }

  displayRooms() {
    this.checkOutService.displayRooms(this.phoneNumber).subscribe(data => {
      console.log(data);
      this.rooms = data;
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    });
  }

  generateBill(event, roomNumber) {
    event.preventDefault();
    this.checkOutService.generateBill(this.phoneNumber, roomNumber).subscribe(data => {
      console.log(data);
      this.bill = data;
      this.displayRooms();
      this.viewBalance(event);
      this.showSnackbar(event);
    });
  }

  showSnackbar(event): void {
    event.preventDefault();
    var x = document.getElementById("snackbar");
    x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  hideSnackbar(event): void {
    event.preventDefault();
    var x = document.getElementById("snackbar");
    x.className = x.className.replace("show", "");
    this.bill = null;
  }

}
