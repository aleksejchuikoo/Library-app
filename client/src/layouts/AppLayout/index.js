import React from 'react';
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";

import './index.scss'

const AppLayout = () => {
	return (
		<div className="app__wrapper">
			<div className="header__wrapper">
				<Header />
			</div>
			<Outlet />
		</div>
	);
}

export default AppLayout;