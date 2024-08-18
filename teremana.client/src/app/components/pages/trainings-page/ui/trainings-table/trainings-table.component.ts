import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../../../../models/as-is/training';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainings-table',
  templateUrl: './trainings-table.component.html',
  styleUrl: './trainings-table.component.css'
})
export class TrainingsTableComponent {
  @Input() trainings!: Observable<Training[]>;
  @Output() update = new EventEmitter<Training>();
  @Output() delete = new EventEmitter<Training>();

  onUpdate(training: Training): void {
    this.update.emit(training);
  }

  onDelete(training: Training): void {
    this.delete.emit(training);
  }
}
