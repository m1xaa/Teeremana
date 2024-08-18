export interface CreateTrainingRequest {
    type: string;
    durationInMinutes: number;
    difficulty: number;
    fatigue: number;
    dateTime: string;
    userId: string;
}