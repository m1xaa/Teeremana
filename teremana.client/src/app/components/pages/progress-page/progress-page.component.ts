import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../../../services/training.service';
import { GetProgressRequest } from '../../../models/progress/get-progress-request';
import { TrainingStatistics } from '../../../models/as-is/training-statistics';
import { Person } from '../../../models/as-is/person';
import { personKey } from '../../../constats';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.css'
})
export class ProgressPageComponent {

  statistics: TrainingStatistics[] = [];
  progressForm: FormGroup;

  constructor(private fb: FormBuilder, private trainingService: TrainingService) {
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
    this.trainingService.checkProgress(this.getPersonId().id, request).subscribe(statistics => {
      this.statistics = statistics;
    });
  }

  getPersonId() {
    var person: Person = JSON.parse(localStorage.getItem(personKey)!);
    return person;
  }
}
