import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-emplanding',
  templateUrl: './emplanding.component.html',
  styleUrls: ['./emplanding.component.scss']
})
export class EmplandingComponent implements OnInit {
  total = 0;
  rooms = [];
  phoneNumber = '';

  constructor(private checkOutService: CheckoutService) { }

  ngOnInit() {
    this.total = localStorage.getItem('total') === null ? 0 : +localStorage.getItem('total');
    this.total = localStorage.getItem('rooms') === null ? [] : JSON.parse(localStorage.getItem('rooms'));
  }

  ngOnDestroy() {
    localStorage.removeItem('total');
    localStorage.removeItem('rooms');
  }

  checkOutCustomer(event) {
    event.preventDefault();
    const target = event.target;
    const phoneNumber = target.querySelector('#phoneNumber').value;
    this.phoneNumber = phoneNumber;
    // console.log(phoneNumber);
    this.checkOutService.checkOutCustomer(phoneNumber).subscribe(data => {
      // console.log(data);
      this.total = data.total > data.paid ? data.total - data.paid : 0;
      // console.log(this.total);
      localStorage.setItem('total', String(this.total));
    });
  }

  displayRooms(event) {
    event.preventDefault();
    const target = event.target;
    const phoneNumber = target.querySelector('#phoneNumber').value;
    this.checkOutService.displayRooms(phoneNumber).subscribe(data => {
      console.log(data);
      this.rooms = data;
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    });
  }

  generateBill(event) {
    event.preventDefault();
    // const target = event.target;
    // const phoneNumber = document.querySelector('#phoneNumber').value;
    // console.log(phoneNumber);
    if (this.phoneNumber === '') {
      window.alert('Please verify your phone number');
      return;
    }
    this.checkOutService.generateBill(this.phoneNumber).subscribe(data => {
      // console.log(data);
      this.total = data.total;
      // console.log(this.total);
      localStorage.setItem('total', String(this.total));
    });
  }

  showSnackbar(event): void {
    var x = document.getElementById("snackbar");
    x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  hideSnackbar(event): void {
    var x = document.getElementById("snackbar");
    x.className = x.className.replace("show", "");
  }

  showRooms(event): void {
    var x = document.getElementById("rooms");
    x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  hideRooms(event): void {
    var x = document.getElementById("rooms");
    x.className = x.className.replace("show", "");
  }

}
