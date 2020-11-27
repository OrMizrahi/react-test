import Typography from '@material-ui/core/Typography';

const Copyrights = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyrights To Or Mizrahi © '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default Copyrights;
