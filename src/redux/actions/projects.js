import { API } from '../../utils/api';
import { FETCH_PROJECTS_SUCCESS } from '../types';
import { finishedLoading, loading } from './loading';
import { error } from './errors';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const fetchProjects = () => async (dispatch) => {
	try {
		const token = cookies.get('token');

		dispatch(loading());
		const { data } = await API.fetchProjects(token);

		dispatch({
			type: FETCH_PROJECTS_SUCCESS,
			payload: data,
		});

		dispatch(finishedLoading());
	} catch (err) {
		dispatch(
			error({
				msg: err.message,
				desc:
					'Could not fetch projects. maybe there is a problem with your url',
			})
		);
	}
};
