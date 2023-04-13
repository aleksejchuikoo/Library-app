import React from 'react';
import { Outlet } from "react-router-dom";

import Header from "../Header";

const AppLayout = () => {
	return (
		<div className="app__wrapper">
			<Header>AppLayout</Header>
			<Outlet />
		</div>
	);
}

export default AppLayout;