import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Loader from "../components/UI/Loader";
import BooksWrapper from "../components/BooksWrapper";

import {fetchMyBooks} from "../redux/books/actionCreators";
import {selectBooksStatus, selectMyBooks} from "../redux/books/selectors";
import {LoadingStatus} from "../redux/types";

const MyBooksPage = () => {
	const dispatch = useDispatch()
	const loadingMyBooks = useSelector(selectBooksStatus)
	const myBooks = useSelector(selectMyBooks)

	const isLoading = LoadingStatus.LOADING === loadingMyBooks

	useEffect(() => {
		dispatch(fetchMyBooks())
	}, [])

	if (isLoading) {
		return <Loader/>
	}

	return (
		<BooksWrapper books={myBooks}/>
	);
}

export default MyBooksPage;