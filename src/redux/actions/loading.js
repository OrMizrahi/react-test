import { LOADING, FINISHED_LOADING } from '../types';

export const loading = () => ({
	type: LOADING,
});

export const finishedLoading = () => ({
	type: FINISHED_LOADING,
});
