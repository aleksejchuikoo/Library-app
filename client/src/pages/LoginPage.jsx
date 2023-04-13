import React from 'react';
import { Link } from 'react-router-dom'

import "../components/Auth/index.scss"

const LoginPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(12312)
	}

	return (
		<div className='auth__wrapper'>
			<form onSubmit={handleSubmit} className='form__wrapper'>
				<p className='form_title'>Login</p>
				<input className='form_input' type='email' placeholder='Email'/>
				<input className='form_input' type='password' placeholder='Password'/>
				<button type='submit' className='form_btn'>Login</button>

				<div className='form_info'>
					<span>Not a member?</span>
					<Link to='/register'>Signup now</Link>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;