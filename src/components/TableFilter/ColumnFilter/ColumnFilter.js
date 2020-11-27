import { TextField } from '@material-ui/core';
import React from 'react';

const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;

	return (
		<>
			<TextField
				value={filterValue || ''}
				variant='outlined'
				size='small'
				onChange={(e) => setFilter(e.target.value)}
			/>
		</>
	);
};

export default ColumnFilter;
