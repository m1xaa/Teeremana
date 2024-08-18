import { User } from "./user";

export interface Training {
    id: string;
    type: string;
    durationInMinutes: number;
    difficulty: number;
    fatigue: number;
    dateTime: string;
    user: User;
}