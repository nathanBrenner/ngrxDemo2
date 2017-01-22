import { ActionReducer, Action } from '@ngrx/store';

import { Session } from '../models/session.interface';

export const SESSION_ACTIONS = {
	GET_USER: {
		ATTEMPT: 'SESSION_GET_USER_ATTEMPT',
		FAILURE: 'SESSION_GET_USER_FAILURE',
		SUCCESS: 'SESSION_GET_USER_SUCCESS'
	},
	LOGIN_USER: {
		ATTEMPT: 'SESSION_LOGIN_USER_ATTEMPT',
		FAILURE: 'SESSION_LOGIN_USER_FAILURE',
		SUCCESS: 'SESSION_LOGIN_USER_SUCCESS'
	},
	LOGOUT_USER: {
		ATTEMPT: 'SESSION_LOGOUT_USER_ATTEMPT'
	},
	REGISTER_USER: {
		ATTEMPT: 'SESSION_REGISTER_USER_ATTEMPT',
		FAILURE: 'SESSION_REGISTER_USER_FAILURE',
		SUCCESS: 'SESSION_REGISTER_USER_SUCCESS'
	},
}

const defaultSession: Session = {
	token: '',
	user: {}
}

export const sessionReducer: ActionReducer<Session> = (state: Session = defaultSession, {type, payload}: Action) => {
	console.log('action', type, payload);
	
	switch(type){
		case SESSION_ACTIONS.GET_USER.SUCCESS:
			return Object.assign({}, state, {user: payload});
		case SESSION_ACTIONS.LOGIN_USER.SUCCESS:
			localStorage.setItem('Authorization', payload.token);
			return Object.assign({}, state, payload);
		case SESSION_ACTIONS.LOGOUT_USER.ATTEMPT:
			localStorage.clear();
			return Object.assign({}, state, defaultSession);
		case SESSION_ACTIONS.REGISTER_USER.SUCCESS:
			localStorage.setItem('Authorization', payload.token);
			return Object.assign({}, state, payload);
		default:
			return state;
	}
}