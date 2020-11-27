import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Info from '../pages/login/info/Info';
import Login from '../pages/login/Login';
import { checkForToken } from '../redux/actions/auth';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkForToken());
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<PublicRoute isLoggedIn={isLoggedIn} exact path='/' component={Login} />
				<PrivateRoute isLoggedIn={isLoggedIn} path='/info' component={Info} />
			</Switch>
		</Router>
	);
};

export default App;
