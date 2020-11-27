import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PersonalDetails = () => {
	const classes = useStyles();
	const { name, Team, avatar, joinedAt } = useSelector(
		(state) => state.auth.personalDetails
	);

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt='user avatar'
					height='350'
					image={avatar}
					title='user avatar'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{Team}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{joinedAt}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default PersonalDetails;
