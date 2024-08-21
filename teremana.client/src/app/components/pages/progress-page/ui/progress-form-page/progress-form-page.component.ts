import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetProgressRequest } from '../../../../../models/progress/get-progress-request';

@Component({
  selector: 'app-progress-form-page',
  templateUrl: './progress-form-page.component.html',
  styleUrl: './progress-form-page.component.css'
})
export class ProgressFormPageComponent {
  progressForm: FormGroup;
  @Output() progress = new EventEmitter<GetProgressRequest>();

  constructor(private fb: FormBuilder) {
    this.progressForm = fb.group({
      month: ['', Validators.required]
    })
  }

  onCheckProgress() {
    if (!this.progressForm.valid)
      return;
    const request: GetProgressRequest = {
      month: this.progressForm.value.month
    }
    this.progress.emit(request);
  }
}
