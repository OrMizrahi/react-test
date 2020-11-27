import { ERROR } from '../types';

export const error = (error) => ({
	type: ERROR,
	payload: error,
});
