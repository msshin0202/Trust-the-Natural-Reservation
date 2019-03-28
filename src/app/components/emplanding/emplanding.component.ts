import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-emplanding',
  templateUrl: './emplanding.component.html',
  styleUrls: ['./emplanding.component.scss']
})
export class EmplandingComponent implements OnInit {
  total = 0;

  constructor(private checkOutService: CheckoutService) { }

  ngOnInit() {
    this.total = localStorage.getItem('total') === null ? 0 : +localStorage.getItem('total');
  }

  ngOnDestroy() {
    localStorage.removeItem('total');
  }

  checkInCustomer(event) {
    event.preventDefault();
    const target = event.target;
    const phoneNumber = target.querySelector('#phoneNumber').value;
    console.log(phoneNumber);
    this.checkOutService.checkOutCustomer(phoneNumber).subscribe(data => {
      console.log(data);
      this.total = data.total;
      console.log(this.total);
      localStorage.setItem('total', String(this.total));
    })
  }

  generateBill(event) {
    event.preventDefault();
    const target = event.target;
    const phoneNumber = target.querySelector('#phoneNumber').value;
    console.log(phoneNumber);
    this.checkOutService.generateBill(phoneNumber).subscribe(data => {
      console.log(data);
      this.total = data.total;
      console.log(this.total);
      localStorage.setItem('total', String(this.total));
    })
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

}
