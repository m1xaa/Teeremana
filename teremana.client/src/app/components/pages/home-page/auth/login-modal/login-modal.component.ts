import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRequest } from '../../../../../models/auth/login-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Output() login = new EventEmitter<LoginRequest>();
  @Output() cancel = new EventEmitter<void>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginClick() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return; 
    }
    const loginRequest = {
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password,
    }
    this.login.emit(loginRequest);
  }

  cancelClick() {
    this.cancel.emit();
  }
}
