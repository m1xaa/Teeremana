import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../../../../models/as-is/training';
import { UpdateTrainingRequest } from '../../../../../models/trainings/update-training-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../../../../models/as-is/person';
import { rangeValidator } from '../../../../../validators/range-validator';
import { getPersonId } from '../../../../../helper/helper';

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
      difficulty: [this.training?.difficulty, rangeValidator(1,10)],
      fatigue: [this.training?.fatigue, rangeValidator(1,10)],
      caloriesBurnt: [this.training?.caloriesBurnt, Validators.required],
      dateTime: [this.training?.dateTime, Validators.required]
    });
  }

  ngOnInit(): void {
    this.updateTrainingForm.patchValue({
      type: this.training.type,
      durationInMinutes: this.training.durationInMinutes,
      difficulty: this.training.difficulty,
      fatigue: this.training.fatigue,
      caloriesBurnt: this.training.caloriesBurnt,
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
      caloriesBurnt: this.updateTrainingForm.value.caloriesBurnt,
      dateTime: this.updateTrainingForm.value.dateTime,
      personId: getPersonId()
    }
    this.update.emit(request);
  }

  getAppropriateDateTime() {
    return this.training.dateTime.toString().slice(0, 16);
  }
}
