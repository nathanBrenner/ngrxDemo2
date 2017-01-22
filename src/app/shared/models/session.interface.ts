import { User } from './user.interface'

export interface Session {
	user: User;
	token: string;
}