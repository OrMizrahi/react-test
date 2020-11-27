import styled from 'styled-components';
import React from 'react';

const StyledTd = styled.td`
	background-color: ${(props) =>
		props.grade < 70 ? 'red' : props.grade >= 90 ? 'green' : 'grey'};
`;

const TableBody = ({ getTableBodyProps, rows, prepareRow }) => {
	return (
		<tbody {...getTableBodyProps()}>
			{rows.map((row) => {
				prepareRow(row);
				return (
					<tr {...row.getRowProps()}>
						{row.cells.map((cell) => {
							return (
								<StyledTd {...cell.getCellProps()} grade={row.cells[2].value}>
									{cell.render('Cell')}
								</StyledTd>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
