import axios from 'axios';

import { AUTH_USER,
				 UNAUTH_USER,
				 AUTH_ERROR,
				 API_URL } from './types';


export function logInUser(user) {
	const request = axios.post(`${API_URL}/api/login/`, {...user})
		.then(response => {
			console.log( 'response', response );
		});

	return {
		type: AUTH_USER,
		payload: request
	}
}

export function registerUser(user) {
	const request = axios.post(`${API_URL}/api/signup/`, {...user})
		.then(response => {
			console.log( 'response', response );
	});

	return {
		type: AUTH_USER,
		payload: request
	}


}