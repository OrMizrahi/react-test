import { ERROR } from '../types';

const initialState = [];

const errorReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ERROR:
			return [...state, payload];
		default:
			return state;
	}
};

export default errorReducer;
