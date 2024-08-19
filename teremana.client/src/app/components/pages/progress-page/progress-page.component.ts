import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../../../services/training.service';
import { User } from '../../../models/as-is/user';
import { userKey } from '../../../constats';
import { GetProgressRequest } from '../../../models/progress/get-progress-request';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.css'
})
export class ProgressPageComponent {

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
    this.trainingService.checkProgress(this.getUserId(), request).subscribe();
  }

  getUserId() {
    var user:User = JSON.parse(localStorage.getItem(userKey)!);
    return user.id;
  }
}
