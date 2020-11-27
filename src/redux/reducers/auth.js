import { LOGIN_SUCCESS, AUTHENTICATED, NOT_AUTHENTICATED } from '../types';

const initialState = {
	isLoggedIn: false,
	//check first if there's already info saved in localstorage
	personalDetails: localStorage.getItem('personalDetails')
		? JSON.parse(localStorage.getItem('personalDetails'))
		: {},
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			return { ...state, isLoggedIn: true, personalDetails: payload };
		case AUTHENTICATED:
			return { ...state, isLoggedIn: true };
		case NOT_AUTHENTICATED:
			return { ...state, isLoggedIn: false };
		default:
			return state;
	}
};

export default authReducer;
