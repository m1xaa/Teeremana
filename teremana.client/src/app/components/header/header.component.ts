import { Component, EventEmitter, Output } from '@angular/core';
import { personKey } from '../../constats';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() login = new EventEmitter<void>();
  @Output() registration = new EventEmitter<void>();
  @Output() logout =  new EventEmitter<void>();
  @Output() trainings = new EventEmitter<void>();
  @Output() progress = new EventEmitter<void>();


  loginClick() {
    this.login.emit();
  }

  registrationClick() {
    this.registration.emit();
  }

  logoutClick() {
    this.logout.emit();
  }

  isUserRegistered() {
    return localStorage.getItem(personKey) != null;
  }

  visitTrainings() {
    this.trainings.emit();
  }

  visitProgressPage() {
    this.progress.emit();
  }
}
