import React from 'react';
import { Link } from "react-router-dom";

const RegisterPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(12312)
	}

	return (
		<div className='auth__wrapper'>
			<form onSubmit={handleSubmit} className='form__wrapper'>
				<p className='form_title'>Create account</p>
				<input className='form_input' type='text' placeholder='Full name'/>
				<input className='form_input' type='email' placeholder='Email'/>
				<input className='form_input' type='password' placeholder='Password'/>
				<button type='submit' className='form_btn'>Login</button>

				<div className='form_info'>
					<span>Have already an account?</span>
					<Link to='/login'>Login here</Link>
				</div>
			</form>
		</div>
	);
}

export default RegisterPage;