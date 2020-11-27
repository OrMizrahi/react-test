import { setMadeDadeline } from '../../utils/helpers';
import { FETCH_PROJECTS_SUCCESS } from '../types';

const initialState = {
	projects: [],
};

const projectsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_PROJECTS_SUCCESS:
			return { projects: setMadeDadeline(payload) };
		default:
			return state;
	}
};

export default projectsReducer;
