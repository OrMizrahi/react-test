import React from 'react';

const TableHeader = ({ headerGroups }) => {
	return (
		<thead>
			{headerGroups.map((headerGroup) => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column) => (
						<th {...column.getHeaderProps(column.getSortByToggleProps())}>
							{column.render('Header')}
							{/* this sorting icons are taken from a youtube tutorial */}
							<span>
								{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
							</span>
							<div>{column.canFilter ? column.render('Filter') : null}</div>
						</th>
					))}
				</tr>
			))}
		</thead>
	);
};

export default TableHeader;
