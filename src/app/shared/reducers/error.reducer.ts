import { ActionReducer, Action} from '@ngrx/store';

import { Error } from '../models/error.interface';

export const ERROR_ACTIONS = {
	REPORT_ERROR: 'REPORT_ERROR',
	REMOVE_ERROR: 'REMOVE_ERROR'
}

export const errorReducer: ActionReducer<Error[]> = (state: Error[] = [], {type, payload}: Action) => {
	switch(type){
		case ERROR_ACTIONS.REPORT_ERROR:
			let id = Math.floor(Math.random() * 1000);
			payload.id = id;
			return [...state, payload] // spread operator
		case ERROR_ACTIONS.REMOVE_ERROR:
			return state.filter(error => error.id != payload.id);
		default:
			return state;
	}
}