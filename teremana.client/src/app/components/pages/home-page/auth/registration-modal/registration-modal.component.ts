import { Component, EventEmitter, Output } from '@angular/core';
import { RegistrationRequest } from '../../../../../models/auth/registration-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrl: './registration-modal.component.css'
})
export class RegistrationModalComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() register = new EventEmitter<RegistrationRequest>();
  registrationForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  registrationClick() {
    if(!this.registrationForm.valid) 
      return;
    const request: RegistrationRequest = {
      'name': this.registrationForm.value.name,
      'surname': this.registrationForm.value.surname,
      'email': this.registrationForm.value.email,
      'password': this.registrationForm.value.password,
      'birthdate': this.registrationForm.value.birthdate
    }

    this.register.emit(request);
  }

  cancelClick() {
    this.cancel.emit();
  }


}
