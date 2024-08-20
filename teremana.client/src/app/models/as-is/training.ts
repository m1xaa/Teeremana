import { Person } from "./person";

export interface Training {
    id: string;
    type: string;
    durationInMinutes: number;
    difficulty: number;
    fatigue: number;
    dateTime: Date;
    person: Person;
}