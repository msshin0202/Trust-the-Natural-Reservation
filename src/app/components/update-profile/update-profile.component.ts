import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../../services/update.service'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: number;
  role: string;
  address: string;
  passwordConfirmation: string;
  isCustomer: boolean = false;
  isEmployee: boolean = false;
  genders = [];

  constructor(private updateService: UpdateService, private router: Router, private Auth: AuthService) { }

  ngOnInit() {
    this.passwordConfirmation = "";
    this.updateService.getProfile().subscribe(data => {
      console.log(data);
      if (data.success) {
        this.email = data.content.email;
        this.firstName = data.content.firstName;
        this.lastName = data.content.lastName;
        this.password = data.content.password;
        if (data.userType === "customer") {
          this.phoneNumber = data.content.phoneNumber;
          this.isCustomer = true;
          this.isEmployee = false;
        } else if (data.userType === "employee") {
          this.gender = data.content.gender;
          this.role = data.content.role;
          this.address = data.content.address;
          this.isEmployee = true;
          this.isCustomer = false;
        }
      }
    });
  }

  submit() {
    if (this.password !== this.passwordConfirmation) {
      window.alert("Passwords do not match. Please try again");
      return;
    } 
    if (this.isCustomer) {
      this.updateService.updateProfile({
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password
      }).subscribe(data => {
        if (data.success) {
          this.router.navigate(['cust']);
          this.Auth.setUserType('customer');
          window.alert(data.message);
        } else {
          window.alert(data.message);
        }
      });
    } else if (this.isEmployee) {
      this.updateService.updateProfile({
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        gender: this.gender,
        role: this.role,
        address: this.address
      }).subscribe(data => {
        if (data.success) {
          this.router.navigate(['employee']);
          this.Auth.setUserType('employee');
          window.alert(data.message);
        } else {
          window.alert(data.message);
        }
      });
    }
  }
}
