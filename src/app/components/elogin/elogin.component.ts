import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.scss']
})
export class EloginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginEmployee(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getEmployeeDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['employee']);
        this.Auth.setUserType('employee');
      } else {
        window.alert(data.message);
      }
    });
  }
}
