import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TrainingState } from "./training.reducers";

export const selectTrainings = (state: AppState) => state.trainings;

export const selectAllTrainings = createSelector(
    selectTrainings,
  (state: TrainingState) => state.trainings
);