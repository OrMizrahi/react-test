export const setMadeDadeline = (projects) => {
	return projects.map((project) => {
		return {
			...project,
			madeDadeline: project.madeDadeline ? 'True' : 'False',
		};
	});
};

export const calcAvgGrade = (projects) => {
	return (
		projects.reduce((acc, project) => {
			return project.values.score + acc;
		}, 0) / projects.length
	).toFixed(2);
};

export const calcPercentage = (projects) => {
	const totalNumOfMadeDadelines = projects.reduce((acc, project) => {
		return project.values.madeDadeline === 'True' ? acc + 1 : acc;
	}, 0);

	return ((totalNumOfMadeDadelines / projects.length) * 100).toFixed(2);
};
