import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-emplanding',
  templateUrl: './emplanding.component.html',
  styleUrls: ['./emplanding.component.scss']
})
export class EmplandingComponent implements OnInit {
  total = 0;
  rooms = [];
  phoneNumber = '';

  constructor(private router: Router) { }

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
    let navigationExtras: NavigationExtras = {
      queryParams: {
          phoneNumber: phoneNumber
      }
    };
    this.router.navigate(['/display'], navigationExtras);
  }

}
