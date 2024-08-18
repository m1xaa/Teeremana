import { Component, EventEmitter, Output } from '@angular/core';
import { CreateTrainingRequest } from '../../../../../models/trainings/create-training-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../models/as-is/user';
import { userKey } from '../../../../../constats';

@Component({
  selector: 'app-create-training-modal',
  templateUrl: './create-training-modal.component.html',
  styleUrl: './create-training-modal.component.css'
})
export class CreateTrainingModalComponent {

  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<CreateTrainingRequest>();

  createTrainingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createTrainingForm = this.fb.group({
      type: ['', Validators.required],
      durationInMinutes: ['', Validators.required],
      difficulty: ['', Validators.required],
      fatigue: ['', Validators.required],
      dateTime: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.close.emit();
  }

  onCreate(): void {
    if (!this.createTrainingForm.valid) {
      this.createTrainingForm.markAllAsTouched();
      return;
    }
    const request: CreateTrainingRequest = {
      type: this.createTrainingForm.value.type,
      durationInMinutes: this.createTrainingForm.value.durationInMinutes,
      difficulty: this.createTrainingForm.value.difficulty,
      fatigue: this.createTrainingForm.value.fatigue,
      dateTime: this.createTrainingForm.value.dateTime,
      userId: this.getUserId()
    }
    console.log(request);
    this.create.emit(request);
  }

  getUserId() {
    var user:User = JSON.parse(localStorage.getItem(userKey)!);
    return user.id;
  }
}
