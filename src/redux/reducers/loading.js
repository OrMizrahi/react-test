import { LOADING, FINISHED_LOADING } from '../types';

const initialState = {
	isLoading: false,
};

const loadingReducer = (state = initialState, { type }) => {
	switch (type) {
		case LOADING:
			return { isLoading: true };
		case FINISHED_LOADING:
			return { isLoading: false };
		default:
			return state;
	}
};

export default loadingReducer;
