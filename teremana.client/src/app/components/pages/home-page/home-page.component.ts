import { Component } from '@angular/core';
import { LoginRequest } from '../../../models/auth/login-request';
import { AuthStateService } from './auth/auth-state';
import { RegistrationRequest } from '../../../models/auth/registration-request';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showLoginModal = false;
  showRegistrationModal = false;

  constructor(private authState: AuthStateService) {
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
}
