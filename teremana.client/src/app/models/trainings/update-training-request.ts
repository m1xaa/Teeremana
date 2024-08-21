export interface UpdateTrainingRequest {
    type: string;
    durationInMinutes: number;
    difficulty: number;
    fatigue: number;
    dateTime: Date;
    caloriesBurnt: number;
    personId: string;
}