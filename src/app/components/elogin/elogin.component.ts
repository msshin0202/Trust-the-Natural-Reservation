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

  eloginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#eusername').value;
    const password = target.querySelector('#epassword').value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['employee']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert('Invalid Username or Password');
      }
    });

    console.log(username, password);
  }

}
