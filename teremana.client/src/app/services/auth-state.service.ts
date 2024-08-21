import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest } from '../models/auth/login-request';
import { RegistrationRequest } from '../models/auth/registration-request';
import { Person } from '../models/as-is/person';
import { personKey } from '../helper/helper';



@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(private authService: AuthService, private router: Router) { }

  login(loginRequest: LoginRequest) {
    this.authService.login(loginRequest).subscribe(person => {
      if (person) {
        this.storePerson(person);
        this.router.navigate(['training']);
      }
      else {
        console.log("Error");
      }
    }) 
  }

  register(registrationRequest: RegistrationRequest) {
    this.authService.register(registrationRequest).subscribe(person => {
      if (person) {
        this.storePerson(person);
        this.router.navigate(['training']);
      } 
      else {
        console.log("Error");
      }
    });
  }

  storePerson(person: Person) {
    localStorage.setItem(personKey, JSON.stringify(person));
  }

  logout() {
    localStorage.removeItem(personKey);
    this.router.navigate(['/']);
  }
}
