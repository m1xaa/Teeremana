export interface CreateTrainingRequest {
    type: string;
    durationInMinutes: number;
    difficulty: number;
    fatigue: number;
    dateTime: Date;
    caloriesBurnt: number;
    personId: string;
}