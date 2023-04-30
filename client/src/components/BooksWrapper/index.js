import React from 'react';
import {useSelector} from "react-redux";

import BookPreview from "../BookPreview";
import Loader from "../UI/Loader";

import {LoadingStatus} from "../../redux/types";
import {selectBooksStatus} from "../../redux/books/selectors";

import "./index.scss"

const BooksWrapper = ({books}) => {
	const loadingBooks = useSelector(selectBooksStatus)
	const isLoading = loadingBooks === LoadingStatus.LOADING

	const content = isLoading ? (
		<Loader/>
	) : (
		books.map((book) => (
			<BookPreview key={book._id} book={book}/>
		))
	)

	return (
		<div className='books__wrapper container'>
			{!books.length && !isLoading && (
				<p className="warning_header">No Books</p>
			)}
			{content}
		</div>
	);
}

export default BooksWrapper;