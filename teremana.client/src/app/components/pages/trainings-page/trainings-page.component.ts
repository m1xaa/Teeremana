import { Component, OnInit } from '@angular/core';
import { Training } from '../../../models/as-is/training';
import { CreateTrainingRequest } from '../../../models/trainings/create-training-request';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectAllTrainings } from '../../../state/trainings/training.selectors';
import { createTraining, deleteTraining, getTrainings, updateTraining } from '../../../state/trainings/training.actions';
import { UpdateTrainingRequest } from '../../../models/trainings/update-training-request';
import { getPersonId } from '../../../helper/helper';

@Component({
  selector: 'app-trainings-page',
  templateUrl: './trainings-page.component.html',
  styleUrl: './trainings-page.component.css'
})
export class TrainingsPageComponent implements OnInit {
  trainings: Observable<Training[]>;
  showCreationModal = false;
  showUpdateModal = false;
  showDeleteModal = false;
  selectedTraining!: Training;

  constructor(private store: Store<AppState>) {
    this.trainings = this.store.select(selectAllTrainings);
  }

  ngOnInit(): void {
    var personId = getPersonId();
    this.store.dispatch(getTrainings({personId: personId}));
  }

  onCreateTraining(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(request: CreateTrainingRequest): void {
    this.store.dispatch(createTraining({request: request, personId: getPersonId()}));
    this.showCreationModal = false;
  }

  onUpdateTraining(training: Training): void {
    this.selectedTraining = training;
    this.showUpdateModal = true;
  }

  onCloseUpdateModal(): void {
    this.showUpdateModal = false;
  }

  onUpdate(request: UpdateTrainingRequest): void {
    this.store.dispatch(updateTraining({request: request, id: this.selectedTraining.id, personId: getPersonId()}));
    this.showUpdateModal = false;
  }

  onDeleteTraining(training: Training): void {
    this.selectedTraining = training;
    this.showDeleteModal = true;
  }

  onCloseDeleteModal(): void {
    this.showDeleteModal = false;
  }

  onDelete(): void {
    this.store.dispatch(deleteTraining({id: this.selectedTraining.id, personId: getPersonId()}));
    this.showDeleteModal = false;
  }
}