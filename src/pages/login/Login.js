import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import Copyrights from '../../components/Copyrights/Copyrights';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth';
import Spinner from '../../components/Spinner/Spinner';

//const englishRegex = /^[A-Za-z]+$/;
const schema = yup.object().shape({
	email: yup
		.string()
		.required('Email is required')
		.email('Email must be valid'),
	//.matches(englishRegex, 'Only english letters'),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Minimum password length is 8 characters')
		.matches(
			/^(?=.*?[A-Z])(?=.*?[0-9])/,
			'Password must contain at least one captial letter and one number'
		),
	//	.matches(englishRegex, 'Only english letters'),
});

const Login = () => {
	const classes = useStyles();
	const isLoading = useSelector((state) => state.loading.isLoading);
	const dispatch = useDispatch();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		dispatch(login(data));
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						inputRef={register}
						autoComplete='email'
						autoFocus
					/>
					<p className={classes.error}>{errors.email?.message}</p>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						inputRef={register}
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
					<p className={classes.error}>{errors.password?.message}</p>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						disabled={Object.keys(errors).length > 0 ? true : false}
					>
						Sign In
					</Button>
				</form>
			</div>
			<Spinner isLoading={isLoading} />
			<Box mt={8}>
				<Copyrights />
			</Box>
		</Container>
	);
};

export default Login;
