import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../pages";
import AppLayout from "../layouts/AppLayout";

const PublicRoutes = () => {
	return (
		<Routes>
			<Route to="/" element={<AppLayout />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
				<Route path='*' element={<Navigate to='/login' />} />
			</Route>
		</Routes>
	);
}

export default PublicRoutes;