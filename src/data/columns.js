import ColumnFilter from '../components/TableFilter/ColumnFilter/ColumnFilter';

const COLUMNS = [
	{
		Header: 'ID',
		accessor: 'id',
		Filter: ColumnFilter,
	},
	{
		Header: 'Name',
		accessor: 'name',
		Filter: ColumnFilter,
	},
	{
		Header: 'Score',
		accessor: 'score',
		Filter: ColumnFilter,
	},
	{
		Header: 'Duration In Days',
		accessor: 'durationInDays',
		Filter: ColumnFilter,
	},
	{
		Header: 'Bugs Count',
		accessor: 'bugsCount',
		Filter: ColumnFilter,
	},
	{
		Header: 'Made Dadeline',
		accessor: 'madeDadeline',
		Filter: ColumnFilter,
	},
];

export default COLUMNS;
