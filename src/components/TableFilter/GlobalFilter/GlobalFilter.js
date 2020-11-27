import './styles.css';
import { Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';

const GlobalFilter = ({ filter, setFilter }) => {
	return (
		<Grid
			container
			spacing={1}
			justify='center'
			alignContent='center'
			alignItems='center'
		>
			<Grid item xs={12} md={4} lg={2}>
				<Typography variant='subtitle2' align='center'>
					Search:{' '}
				</Typography>
			</Grid>
			<Grid item xs={12} md={8} lg={10}>
				<TextField
					variant='outlined'
					size='small'
					value={filter || ''}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default GlobalFilter;
