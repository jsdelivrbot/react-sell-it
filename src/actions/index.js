import axios from 'axios';

import { AUTH_USER,
				 UNAUTH_USER,
				 AUTH_ERROR,
				 AUTH_FAILED,
	CLEAR_MESSAGE} from './types';

const API_URL = 'http://fe-kurs.light-it.loc:38000';

export function errorHandler(dispatch, error, type) {
	let errorMessage = '';

	if(error.data.error) {
		errorMessage = error.data.error;
	} else if(error.data) {
		errorMessage = error.data;
	} else {
		errorMessage = error;
	}

	if(error.status === 401) {
		dispatch({
			type,
			payload: 'You are not authorized to do this. Please login and try again.'
		});
		logOutUser();

	} else {
		dispatch({
			type,
			payload: errorMessage
		})
	}
}

export function logInUser(user, callback) {
	return function(dispatch) {
		axios.post(`${API_URL}/api/login/`, { ...user })
			.then(response => {

				// Save token to local storage
				if (typeof(Storage) !== 'undefined') {
					localStorage.setItem('token', response.data.token);
					callback();
				} else {
					errorHandler(dispatch, 'Sorry! Your browser doesn\'t support a local storage', AUTH_ERROR);
				}
				dispatch({ type: AUTH_USER });
			})
			.catch(error => {
				console.log('errror', error);
				errorHandler(dispatch, error.response, AUTH_ERROR);
			});
	}
}

export function logOutUser() {
	return function (dispatch) {
		dispatch({ type: UNAUTH_USER });
		localStorage.removeItem('token');
		console.log('should redirect to login page');
	}
}

export function clearErrorMessages(state) {
	return function ( dispatch ) {
		dispatch({
			type: CLEAR_MESSAGE,
		})
	}
}

export function registeeerUser({ email, firstName, lastName, password }) {
	return function(dispatch) {
		dispatch({ type: REGISTER_USER_REQUEST });
		axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
			.then(response => {
				cookie.save('token', response.data.token, { path: '/' });
				dispatch(registerUser());
				window.location.href = CLIENT_ROOT_URL + '/dashboard';
			})
			.catch((error) => {
				dispatch({ type: REGISTER_USER_ERROR, payload: error })
			});
	}
}

export function registerUser(user, callback) {
	const request = axios.post(`${API_URL}/api/signup/`, {...user})
		.then(() => callback());

	return {
		type: AUTH_USER,
		payload: request
	}


}