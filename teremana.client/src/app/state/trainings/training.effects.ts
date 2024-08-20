import { Injectable } from "@angular/core";
import { TrainingService } from "../../services/training.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createTraining, createTrainingFailure, createTrainingSuccess, deleteTraining, deleteTrainingFailure, deleteTrainingSuccess, getTrainings, getTrainingsFailure, getTrainingsSuccess, updateTraining, updateTrainingFailure, updateTrainingSuccess } from "./training.actions";
import { catchError, from, map, of, switchMap } from "rxjs";

@Injectable()
export class TrainingEffects {
  constructor(
    private actions$: Actions,
    private trainingService: TrainingService
  ) {
  }

  getTrainings$ = createEffect(() => 
      this.actions$.pipe(
        ofType(getTrainings),
        switchMap(action =>
          from(this.trainingService.getAllByUserId(action.personId)).pipe(
            map((trainings) => getTrainingsSuccess({ trainings: trainings })),
            catchError((error) => of(getTrainingsFailure({ error })))
          )
        )
      )
    )

  createTraining$ = createEffect(() => 
      this.actions$.pipe(
          ofType(createTraining),
          switchMap(action => 
              from(this.trainingService.create(action.request)).pipe(
                map((training) => createTrainingSuccess({ training: training})),
                catchError((error) => of(createTrainingFailure({ error })))
              )
          )
      )
  )

  updateTraining$ = createEffect(() => 
    this.actions$.pipe(
        ofType(updateTraining),
        switchMap(action => 
            from(this.trainingService.update(action.id, action.request)).pipe(
              map((training) => updateTrainingSuccess({ training: training})),
              catchError((error) => of(updateTrainingFailure({ error })))
            )
        )
    )
  )

  deleteTraining$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTraining),
      switchMap(action => 
          from(this.trainingService.delete(action.id)).pipe(
            map(() => deleteTrainingSuccess({ id: action.id})),
            catchError((error) => of(deleteTrainingFailure({ error })))
          )
      )
    )
  )
}