import { Component, Input } from '@angular/core';
import { TrainingStatistics } from '../../../../../models/as-is/training-statistics';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrl: './progress-table.component.css'
})
export class ProgressTableComponent {

  @Input() statistics!: TrainingStatistics[];

  constructor() {}
}
