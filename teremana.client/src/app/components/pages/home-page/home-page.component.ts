import { Component } from '@angular/core';
import { LoginRequest } from '../../../models/auth/login-request';
import { RegistrationRequest } from '../../../models/auth/registration-request';
import { AuthStateService } from '../../../services/auth-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showLoginModal = false;
  showRegistrationModal = false;

  constructor(private authState: AuthStateService, private router: Router) {
  }

  onLogin(loginRequest: LoginRequest) {
    this.showLoginModal = false;
    this.authState.login(loginRequest);
  }

  onCancelLogin() {
    this.showLoginModal = false; 
  }

  onRegistration(registerRequest: RegistrationRequest) {
    this.showRegistrationModal = false;
    this.authState.register(registerRequest);
  }

  onCancelRegistration() {
    this.showRegistrationModal = false;
  }

  onShowLoginModal() {
    this.showLoginModal = true;
  }

  onShowRegistrationModal() {
    this.showRegistrationModal=true;
  }

  onLogout() {
    this.authState.logout();
  }

  onProgress() {
    this.router.navigate(['progress'])
  }

  onTrainings() {
    this.router.navigate(['training'])
  }
}
