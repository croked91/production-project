import { IUser } from 'entities/User';

export interface Comment {
    id: string;
    user: IUser;
    text: string;
}
