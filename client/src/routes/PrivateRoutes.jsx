import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import PreviousPageLayout from "../layouts/PreviousPageLayout";
import {BookPage, CreateBookPage, MainPage, UsersPage, MyBooksPage} from "../pages";

import useAdmin from "../hooks/useAdmin";

const PrivateRoutes = () => {
	const isAdmin = useAdmin()

	return (
		<Routes>
			<Route path='/' element={<AppLayout/>}>
				<Route index element={<MainPage/>}/>
				<Route path='/' element={<PreviousPageLayout/>}>
					<Route path='book/:id' element={<BookPage/>}/>
					<Route path='my-books' element={<MyBooksPage />} />

					{isAdmin && (
						<React.Fragment>
							<Route path='users' element={<UsersPage/>}/>
							<Route path='create-book' element={<CreateBookPage/>}/>
						</React.Fragment>
					)}
				</Route>
				<Route path="*" element={<Navigate to='/'/>}/>
			</Route>
		</Routes>
	);
}

export default PrivateRoutes;