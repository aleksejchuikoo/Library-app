import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import './index.scss'

const PreviousPageLayout = () => {
	const navigate = useNavigate()

	const backToPrevPage = () => {
		navigate(-1)
	}

	return (
		<>
			<div className='back-btn__wrapper container'>
				<button onClick={backToPrevPage} className='back-btn btn'>Back to previous page</button>
			</div>
			<Outlet/>
		</>
	);
}

export default PreviousPageLayout;