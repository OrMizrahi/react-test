import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import Spinner from '../../components/Spinner/Spinner';

import { fetchProjects } from '../../redux/actions/projects';

const Info = () => {
	const isLoading = useSelector((state) => state.loading.isLoading);
	const projects = useSelector((state) => state.projects.projects);

	const memoizedProjects = useMemo(() => projects, [projects]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjects());
	}, [dispatch]);

	return (
		<Container maxWidth='lg'>
			<Grid container spacing={1}>
				<Grid item xs={12} md={4} lg={4}>
					<PersonalDetails />
				</Grid>
				<Grid item xs={12} md={8} lg={8}>
					{isLoading ? <Spinner /> : <ProjectsTable data={memoizedProjects} />}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Info;
