import React from 'react';
import { useStyles } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = ({ isLoading }) => {
	const classes = useStyles();

	if (isLoading) {
		return (
			<div className={classes.root}>
				<CircularProgress />
			</div>
		);
	} else {
		return null;
	}
};

Spinner.defaultProps = {
	isLoading: true,
};

export default Spinner;
