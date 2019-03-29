import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted: boolean = false;
  success: boolean = false;
  isEmployee: boolean = false;
  isCustomer: boolean = false;
  hasVehicle: boolean = false;
  baseUrl = 'http://localhost:3000/api';

  selectedGender: string = "Female";
  selectedRole: string = "Manager";
  genderHash: any = {"Female" : 0, "Male": 1};

  constructor(private signupService: SignupService, private router: Router, private Auth: AuthService) { }

  ngOnInit() {

  }

  selectChangeHandlerGender (event: any) {
    this.selectedGender = event.target.value;
  }

  selectChangeHandlerRole (event: any) {
    this.selectedRole = event.target.value;
  }

  onSubmit(event) {

    event.preventDefault();

    this.submitted = true;
    const target = event.target;
    const firstName = target.querySelector('#firstName').value;
    const lastName = target.querySelector('#lastName').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const passwordConfirm = target.querySelector('#passwordConfirm').value;
    const colour = target.querySelector('#colour').value;
    const model = target.querySelector('#model').value;
    if (this.isEmployee) {
      const address = target.querySelector('#address').value;
      const gender = this.genderHash[this.selectedGender];
      const role = this.selectedRole;
      this.signupService.submitEmployeeSignUp(firstName, lastName, email,
        password, passwordConfirm, gender, role, address).subscribe(data => {
        if (data.success) {
          this.router.navigate(['employee']);
          this.Auth.setUserType('employee');
          window.alert(data.message);
        } else {
          window.alert(data.message);
        }});
      } else if (this.isCustomer) {
      const phoneNumber = target.querySelector('#phoneNumber').value;
      this.signupService.submitCustomerSignUp(firstName, lastName, email, phoneNumber,
        password, passwordConfirm, colour, model).subscribe(data => {
        if (data.success) {
          this.router.navigate(['cust']);
          this.Auth.setUserType('customer');
          window.alert(data.message);
        } else {
          window.alert(data.message);
        }
      });
    }
    this.success = true;
  }
  employeeSignup() {
    this.isEmployee = true;
    this.isCustomer = false;

    var y = document.getElementById("submitdiv");

  if(y.style.display = "none"){
    y.style.display = "block";
  }

  }
  customerSignup() {
    this.isCustomer = true;
    this.isEmployee = false;
    var y = document.getElementById("submitdiv");

  if(y.style.display = "none"){
    y.style.display = "block";
  }
  }

  vehicleSignup(){
    this.hasVehicle = true;
  }
}
