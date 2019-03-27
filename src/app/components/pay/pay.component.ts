import { Component, OnInit } from '@angular/core';
import { PayService } from '../../services/pay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  isCash: boolean = false;
  isCreditCard: boolean = false;
  baseUrl = 'http://localhost:3000/api';

  constructor(private router: Router, private payService: PayService) { }

  ngOnInit() {
  }

  onSubmit(event) {

    event.preventDefault();

      const target = event.target;
      const bid = target.querySelector('#bid').value;
      const amount = target.querySelector('#amount').value;
      if (this.isCreditCard) {
        const cardHolderName = target.querySelector('#cardHolderName').value;
        const creditCardNumber = target.querySelector('#creditCardNumber').value;
        const expirary = target.querySelector('#expirary').value;
        const svc = target.querySelector('#svc').value;
        console.log(cardHolderName, creditCardNumber, expirary, svc);
        this.payService.submitCreditCard(bid, amount, this.isCash).subscribe((data) => {
          window.alert(data.message);
          if (data.success){
            this.router.navigate(['cust']);
          }
        });
      } else {

        this.payService.submitCash(bid, amount, this.isCash).subscribe((data) => {
          window.alert(data.message);
          if (data.success) {
            this.router.navigate(['cust']);
          }
        });
      }
  }

  creditCardPayment() {
    this.isCreditCard = true;
    this.isCash = false;
  }

  cashPayment() {
    this.isCash = true;
    this.isCreditCard = false;
  }

}
