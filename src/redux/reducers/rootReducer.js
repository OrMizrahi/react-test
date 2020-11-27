import { combineReducers } from 'redux';
import authReducer from './auth';
import errorReducer from './errors';
import loadingReducer from './loading';
import projectsReducer from './projects';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	loading: loadingReducer,
	projects: projectsReducer,
});
