import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CloginComponent } from './components/clogin/clogin.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CustlandingComponent } from './components/custlanding/custlanding.component';
import { AuthGuard } from './classes/auth.guard';
import { AuthService } from './services/auth.service';
import { CustUserService } from './services/cust-user.service';
import { SliderComponent } from './components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { PayComponent } from './components/pay/pay.component';
import { SignupComponent } from './components/signup/signup.component';
import { EloginComponent } from './components/elogin/elogin.component';
import { EmplandingComponent } from './components/emplanding/emplanding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StayedInComponent } from './components/stayed-in/stayed-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    CustlandingComponent,
    SliderComponent,
    ConfirmationComponent,
    RoomsComponent,
    PayComponent,
    CloginComponent,
    EloginComponent,
    EmplandingComponent,
    SignupComponent,
    StayedInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'clogin',
        component: CloginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'cust',
        component: CustlandingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'rooms',
        component: RoomsComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      },
      {
        path: 'pay',
        component: PayComponent
      },
      {
        path: 'elogin',
        component: EloginComponent
      },
      {
        path: 'employee',
        component: EmplandingComponent
      }, 
      { 
        path: 'signup',
        component: SignupComponent
      },
      { 
        path: 'display',
        component: StayedInComponent
      }
    ])
  ],
  providers: [AuthService, CustUserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
