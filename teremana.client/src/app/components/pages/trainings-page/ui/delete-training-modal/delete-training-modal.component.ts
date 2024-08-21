import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../../../../models/as-is/training';

@Component({
  selector: 'app-delete-training-modal',
  templateUrl: './delete-training-modal.component.html',
  styleUrl: './delete-training-modal.component.css'
})
export class DeleteTrainingModalComponent {
  @Input() training!: Training;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onCancel(): void {
    this.close.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
