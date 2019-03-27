import { Component, OnInit } from '@angular/core';
type User = {
  phonenum: String
}

@Component({
  selector: 'app-view.profile',
  templateUrl: './view.profile.component.html',
  styleUrls: ['./view.profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  user: User = {
    phonenum: '123-456-7890'
  };

  constructor() { }

  ngOnInit() {
  }

}
