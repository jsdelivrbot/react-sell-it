import { AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	AUTH_FAILED} from '../actions/types';

const INITIAL_STATE = {
	error: '',
	message: '',
	authenticated: false
};

export default function( state = INITIAL_STATE, action ) {
	switch (action.type) {
		case AUTH_USER:
			console.log('auth success', state);
			return { ...state, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}