import { Divider, Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import COLUMNS from '../../data/columns';
import { calcAvgGrade, calcPercentage } from '../../utils/helpers';
import TableBody from '../TableBody/TableBody';
import GlobalFilter from '../TableFilter/GlobalFilter/GlobalFilter';
import TableHeader from '../TableHeader/TableHeader';
import './styles.css';

const ProjectsTable = ({ data }) => {
	const columns = useMemo(() => COLUMNS, []);

	const tableInstance = useTable(
		{
			columns,
			data,
		},
		useFilters,
		useGlobalFilter,
		useSortBy
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = tableInstance;

	const { globalFilter } = state;

	const avgGrade = calcAvgGrade(rows);
	const madePercentage = calcPercentage(rows);

	return (
		<>
			{rows.length > 0 && (
				<Grid container spacing={1}>
					<Grid item xs={12} md={6} lg={4}>
						Average Grade is: <strong>{avgGrade}%</strong>
					</Grid>
					<Grid item xs={12} md={6} lg={8}>
						<strong>{madePercentage}%</strong> of the projects made the Dadeline
					</Grid>
				</Grid>
			)}

			<Divider variant='middle' className='mb_large' />
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<Divider variant='middle' />
			<table {...getTableProps()}>
				<TableHeader headerGroups={headerGroups} />
				<TableBody
					getTableBodyProps={getTableBodyProps}
					prepareRow={prepareRow}
					rows={rows}
				/>
			</table>
		</>
	);
};

export default ProjectsTable;
