export interface UpdateTrainingRequest {
    type: string;
    durationInMinutes: number;
    difficulty: number;
    fatigue: number;
    dateTime: string;
    userId: string;
}