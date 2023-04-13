import React from 'react';
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
	const isAuth = true

	return (
		<Routes>
			{isAuth ? (
					<Route path='*' element={<PrivateRoutes />} />
				) : (
					<Route path='*' element={<PublicRoutes />} />
				)
			}
		</Routes>
	);
}

export default AppRouter;