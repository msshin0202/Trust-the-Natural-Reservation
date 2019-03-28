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
import { EroomstatusComponent } from './components/eroomstatus/eroomstatus.component';
import { ListcustComponent } from './components/listcust/listcust.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDirtyRoomsComponent } from './components/view-dirty-rooms/view-dirty-rooms.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';


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
    EroomstatusComponent,
    ListcustComponent,
    SignupComponent,
    ViewDirtyRoomsComponent,
    CheckinComponent,
    UpdateProfileComponent
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
        canActivate: [AuthGuard],
        data: { userTypeAllowed: ['customer'] }
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'rooms',
        component: RoomsComponent,
        canActivate: [AuthGuard],
        data: { userTypeAllowed: ['customer', 'employee'] }
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      },
      {
        path: 'pay',
        component: PayComponent,
        canActivate: [AuthGuard],
        data: { userTypeAllowed: ['customer', 'employee'] }
      },
      {
        path: 'elogin',
        component: EloginComponent
      },
      {
        path: 'employee',
        component: EmplandingComponent,
        canActivate: [AuthGuard],
        data: { userTypeAllowed: ['employee'] }
      },
      {
        path: 'signup',
        component: SignupComponent
      },

    {
      path: 'roomstatus',
      component: EroomstatusComponent
    },
    {
      path: 'checkedincust',
      component: ListcustComponent
    },{

        path: 'view-dirty-rooms',
        component: ViewDirtyRoomsComponent
      },
      {
        path: 'update-profile',
        component: UpdateProfileComponent
      }
    ])
  ],
  providers: [AuthService, CustUserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
