import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import AppLayout from "../components/AppLayout";
import { BookPage, CreateBookPage, MainPage, UsersPage, MyBooksPage } from "../pages";

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<MainPage />} />
				<Route path='create-book' element={<CreateBookPage />} />
				<Route path='users' element={<UsersPage />} />
				<Route path='my-books' element={<MyBooksPage />} />
				<Route path='book/:id' element={<BookPage />} />
				<Route path="*" element={<Navigate to='/' />} />
			</Route>
		</Routes>
	);
}

export default PrivateRoutes;