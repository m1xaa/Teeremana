import { User } from "./user";

export interface Person {
    id: string;
    name: string;
    surname: string;
    birthdate: Date;
    user: User;
}