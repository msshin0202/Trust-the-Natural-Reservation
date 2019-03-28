import { Component, OnInit } from '@angular/core';
import { CustUserService } from '../../services/cust-user.service'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  unLoggedInUserType = 'unknown';
  constructor(private cust_user: CustUserService, private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.Auth.logout().subscribe(data => {
      if (data.success) {
        this.router.navigate(['/']);
        this.Auth.setUserType(this.unLoggedInUserType);
      } else {
        window.alert("Could not log out. Please try again" + data.message);
      }
    });
  }
}
