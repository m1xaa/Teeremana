import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../../../services/training.service';
import { GetProgressRequest } from '../../../models/progress/get-progress-request';
import { TrainingStatistics } from '../../../models/as-is/training-statistics';
import { getPersonId } from '../../../helper/helper';
import { ProgressService } from '../../../services/progress.service';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.css'
})
export class ProgressPageComponent {

  statistics: TrainingStatistics[] = [];

  constructor(private progressService: ProgressService) {}

  onCheckProgress(request: GetProgressRequest) {
    this.progressService.checkProgress(getPersonId(), request).subscribe(statistics => {
      this.statistics = statistics;
    });
  }
}
