import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
		// Show the component only when the user is not logged in
		// Otherwise, redirect the user to /info page
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? <Redirect to='/info' /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
