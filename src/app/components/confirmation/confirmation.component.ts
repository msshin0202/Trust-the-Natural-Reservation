import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  rid = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation.extras.state)
    this.rid = navigation.extras.state ? navigation.extras.state.data.data.rid : this.rid;
  }

  ngOnInit() {
  }

}
