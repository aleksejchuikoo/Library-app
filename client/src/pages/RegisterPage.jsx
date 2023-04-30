import React from 'react';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {registerAction} from "../redux/auth/actionCreators";

const RegisterPage = () => {
	const { register, handleSubmit, formState } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: ''
		},
		mode: 'onChange'
	})
	const dispatch = useDispatch()

	const onSubmit = (values) => {
		dispatch(registerAction(values))
	}

	return (
		<div className='auth__wrapper'>
			<form onSubmit={handleSubmit(onSubmit)} className='form__wrapper'>
				<p className='form_title'>Create account</p>
				<input
					name='fullName'
					className='form_input'
					type='text'
					placeholder='Full Name'
					{...register('fullName', { required: 'Enter the full name' })}
				/>
				<span className='error'>{formState.errors.fullName?.message}</span>
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
					{...register('password', { required: 'Enter the password', minLength: 6 })}
				/>
				<span className='error'>{formState.errors.password?.message}</span>
				<button
					type='submit'
					className={`form_btn ${!formState.isValid ? 'disabled' : ''}`}
					disabled={!formState.isValid}
				>
					Register
				</button>

				<div className='form_info'>
					<span>Have already an account?</span>
					<Link to='/login'>Login here</Link>
				</div>
			</form>
		</div>
	);
}

export default RegisterPage;