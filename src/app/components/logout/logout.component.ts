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

  constructor(private cust_user: CustUserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.cust_user.logout().subscribe(data => {
      if(data.success) {
        this.router.navigate(['']);
        this.auth.setLoggedIn(false);
      } else {
        window.alert('Some problem');
      }
    })
  }

}
