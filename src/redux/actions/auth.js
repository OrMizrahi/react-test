import { API } from '../../utils/api';
import { LOGIN_SUCCESS, NOT_AUTHENTICATED, AUTHENTICATED } from '../types';
import Cookies from 'universal-cookie';
import { finishedLoading, loading } from './loading';
import { error } from './errors';

const cookies = new Cookies();

export const login = (userData) => async (dispatch) => {
	try {
		dispatch(loading());
		const { data } = await API.authenticate(userData);

		//saving token in cookie (for security reasons)
		cookies.set('token', data[0].token);


		//saving the rest of the data in local storage (no need for security)
		localStorage.setItem(
			'personalDetails',
			JSON.stringify(data[0].personalDetails)
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data[0].personalDetails,
		});

		dispatch(finishedLoading());
	} catch (err) {
		dispatch(
			error({
				msg: err.message,
				desc: 'Could not login. maybe there is a problem with your url',
			})
		);
	}
};

export const checkForToken = () => (dispatch) => {
	const token = cookies.get('token');

	if (token) {
		dispatch({ type: AUTHENTICATED });
	} else {
		dispatch({ type: NOT_AUTHENTICATED });
	}
};
