import { createReducer, on } from "@ngrx/store";
import { Training } from "../../models/as-is/training";
import { createTrainingFailure, createTrainingSuccess, deleteTrainingFailure, deleteTrainingSuccess, getTrainingsFailure, getTrainingsSuccess, updateTrainingFailure, updateTrainingSuccess } from "./training.actions";

export interface TrainingState {
    trainings: Training[],
    error: string
}

export const initialState: TrainingState = {
    trainings: [],
    error: ""
}

export const trainingReducer = createReducer(
    initialState,
    on(createTrainingSuccess, (state, { training }) => ({
      ...state,
      trainings: [...state.trainings, training],
    })),
    on(createTrainingFailure, (state, { error }) => ({
      ...state,
      error: error,
    })),
    on(updateTrainingSuccess, (state, { training }) => ({
        ...state,
        trainings: state.trainings.map((t) => 
            t.id === training.id ? training : t
          ),
      })),
      on(updateTrainingFailure, (state, { error }) => ({
        ...state,
        error: error,
      })),
    on(deleteTrainingSuccess, (state, { id }) => ({
      ...state,
      posts: state.trainings.filter((t) => t.id !== id),
    })),
    on(deleteTrainingFailure, (state, { error }) => ({
      ...state,
      error: error,
    })),
    on(getTrainingsSuccess, (state, { trainings }) => ({
      ...state,
      trainings: trainings,
    })),
    on(getTrainingsFailure, (state, { error }) => ({
      ...state,
      error: error,
    }))
  );