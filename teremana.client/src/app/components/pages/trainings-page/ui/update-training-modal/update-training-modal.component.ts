import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../../../../models/as-is/training';
import { UpdateTrainingRequest } from '../../../../../models/trainings/update-training-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { defaultUrlMatcher } from '@angular/router';
import { User } from '../../../../../models/as-is/user';
import { personKey} from '../../../../../constats';
import { Person } from '../../../../../models/as-is/person';

@Component({
  selector: 'app-update-training-modal',
  templateUrl: './update-training-modal.component.html',
  styleUrl: './update-training-modal.component.css'
})
export class UpdateTrainingModalComponent {
  @Input() training!: Training;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<UpdateTrainingRequest>();
  updateTrainingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateTrainingForm = this.fb.group({
      type: [this.training?.type, Validators.required],
      durationInMinutes: [this.training?.durationInMinutes, Validators.required],
      difficulty: [this.training?.difficulty, Validators.required],
      fatigue: [this.training?.fatigue, Validators.required],
      dateTime: [this.training?.dateTime, Validators.required]
    });
  }

  ngOnInit(): void {
    this.updateTrainingForm.patchValue({
      type: this.training.type,
      durationInMinutes: this.training.durationInMinutes,
      difficulty: this.training.difficulty,
      fatigue: this.training.fatigue,
      dateTime: this.getAppropriateDateTime()
    })
  }

  onCancel(): void {
    this.close.emit();
  }

  onUpdate(): void {
    if (!this.updateTrainingForm.valid) {
      this.updateTrainingForm.markAllAsTouched();
      return;
    }
    const request: UpdateTrainingRequest = {
      type: this.updateTrainingForm.value.type,
      durationInMinutes: this.updateTrainingForm.value.durationInMinutes,
      difficulty: this.updateTrainingForm.value.difficulty,
      fatigue: this.updateTrainingForm.value.fatigue,
      dateTime: this.updateTrainingForm.value.dateTime,
      personId: this.getPersonId()
    }
    this.update.emit(request);
  }

  getPersonId() {
    var person:Person = JSON.parse(localStorage.getItem(personKey)!);
    return person.id;
  }

  getAppropriateDateTime() {
    return this.training.dateTime.toString().slice(0, 16);
  }
}
