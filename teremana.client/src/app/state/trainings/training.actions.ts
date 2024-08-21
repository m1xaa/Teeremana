import { createAction, props } from "@ngrx/store";
import { CreateTrainingRequest } from "../../models/trainings/create-training-request";
import { Training } from "../../models/as-is/training";
import { UpdateTrainingRequest } from "../../models/trainings/update-training-request";

export const createTraining = createAction(
    '[Training Page] Create training',
    props<{
        request: CreateTrainingRequest
        personId: string
    }>()
)

export const createTrainingSuccess = createAction(
    '[Training Page] Create training success',
    props<{training: Training}>()
)

export const createTrainingFailure = createAction(
    '[Training Page] create training failure',
    props<{error: string}>()
)

export const updateTraining = createAction(
    '[Training Page] Update training',
    props<{
        request: UpdateTrainingRequest,
        id: string
        personId: string
    }>()
)

export const updateTrainingSuccess = createAction(
    '[Training Page] Update training success',
    props<{training: Training}>()
)

export const updateTrainingFailure = createAction(
    '[Training Page] Update training failure',
    props<{error: string}>()
)

export const deleteTraining = createAction(
    '[Training Page] Delete training',
    props<{
        id: string,
        personId: string
    }>()
)

export const deleteTrainingSuccess = createAction(
    '[Training Page] Delete training success',
    props<{id: string}>()
)

export const deleteTrainingFailure = createAction(
    '[Training Page] Delete training failure',
    props<{error: string}>()
)

export const getTrainings = createAction(
    '[Training Page] Get trainings',
    props<{personId: string}>()
)

export const getTrainingsSuccess = createAction(
    '[Training Page] Get trainings success',
    props<{trainings: Training[]}>()
)

export const getTrainingsFailure = createAction(
    '[Training Page] Get trainings failure',
    props<{error: string}>()
)