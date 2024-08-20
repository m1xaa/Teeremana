import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../../../services/training.service';
import { GetProgressRequest } from '../../../models/progress/get-progress-request';
import { TrainingStatistics } from '../../../models/as-is/training-statistics';
import { getPersonId } from '../../../helper/helper';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.css'
})
export class ProgressPageComponent {

  statistics: TrainingStatistics[] = [];

  constructor(private trainingService: TrainingService) {}

  onCheckProgress(request: GetProgressRequest) {
    this.trainingService.checkProgress(getPersonId(), request).subscribe(statistics => {
      this.statistics = statistics;
    });
  }
}
