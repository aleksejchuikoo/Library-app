import React, {useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Loader from "../components/UI/Loader";

import {selectAuthData, selectAuthStatus} from "../redux/auth/selectors";
import {getMeAction} from "../redux/auth/actionCreators";
import {LoadingStatus} from "../redux/types";

const AppRouter = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectAuthData)
	const loadingAuth = useSelector(selectAuthStatus)

	const isLoading = loadingAuth === LoadingStatus.LOADING

	useEffect(() => {
		dispatch(getMeAction())
	}, [])

	if (isLoading) {
		return <Loader />
	}

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