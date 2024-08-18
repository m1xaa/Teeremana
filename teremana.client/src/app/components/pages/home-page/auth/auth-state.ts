import { Injectable } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../../../../models/auth/login-request';
import { RegistrationRequest } from '../../../../models/auth/registration-request';
import { User } from '../../../../models/as-is/user';
import { userKey } from '../../../../constats';


@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(private authService: AuthService, private router: Router) { }

  login(loginRequest: LoginRequest) {
    this.authService.login(loginRequest).subscribe(user => {
      if (user) {
        this.storeUser(user);
        this.router.navigate(['training']);
      }
      else {
        console.log("Error");
      }
    }) 
  }

  register(registrationRequest: RegistrationRequest) {
    this.authService.register(registrationRequest).subscribe(user => {
      if (user) {
        this.storeUser(user);
        this.router.navigate(['training']);
      } 
      else {
        console.log("Error");
      }
    });
  }

  storeUser(user: User) {
    localStorage.setItem(userKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(userKey);
    this.router.navigate(['/']);
  }
}
