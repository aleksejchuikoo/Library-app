import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {useForm} from 'react-hook-form'

import {loginAction} from "../redux/auth/actionCreators";

import "../components/Auth/index.scss"

const LoginPage = () => {
	const dispatch = useDispatch()

	const { register, handleSubmit, formState } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmit = (values) => {
		dispatch(loginAction(values))
	}

	return (
		<div className='auth__wrapper'>
			<form onSubmit={handleSubmit(onSubmit)} className='form__wrapper'>
				<p className='form_title'>Login</p>
				<input
					name='email'
					className='form_input'
					type='email'
					placeholder='Email'
					{...register('email', { required: 'Enter the email' })}
				/>
				<span className='error'>{formState.errors.email?.message}</span>
				<input
					name='password'
					className='form_input'
					type='password'
					placeholder='Password'
					{...register('password', { required: 'Enter the password' })}
				/>
				<span className='error'>{formState.errors.password?.message}</span>
				<button
					type='submit'
					className={`form_btn ${!formState.isValid ? 'disabled' : ''}`}
					disabled={!formState.isValid}
				>
					Login
				</button>

				<div className='form_info'>
					<span>Not a member?</span>
					<Link to='/register'>Signup now</Link>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;