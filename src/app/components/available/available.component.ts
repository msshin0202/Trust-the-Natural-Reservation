import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.scss']
})
export class AvailableComponent implements OnInit {
  rooms = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    this.rooms = navigation.extras.state ? navigation.extras.state.rooms.data : this.rooms;
  }

  ngOnInit() {
  }

}
