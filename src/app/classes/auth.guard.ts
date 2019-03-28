import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Auth: AuthService, private router: Router ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(next);
      const EXPECTED_USER_TYPE_ALLOWED_ARRAY = next.data.userTypeAllowed;

      var canNavigate = this.Auth.getUserTypeDetails().toPromise().then(data => {
        console.log(data);
        if (data.success) {
          this.Auth.setUserType(data.message);
          let userType = data.message;
          let canNavigate = EXPECTED_USER_TYPE_ALLOWED_ARRAY.includes(userType);
          if (!canNavigate) {
            console.log(this.router.url);
            this.router.navigate([state.url]);
          }
          return canNavigate;
        }
      });
      return canNavigate;
  }
  
}
